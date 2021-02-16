import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import argon2 from 'argon2';
import { getConnection } from "typeorm";

@InputType()
class UserRegistrationInput{
    @Field()
    name: string
    @Field()
    email: string
    @Field()
    password: string
}

@InputType()
class UserLoginInput{
    @Field()
    email: string;
    @Field()
    password: string;
}

@ObjectType()
class FieldError{
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse{
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => User, {nullable: true})
    user?: User;
}

@Resolver()
export class UserResolver {

    @Query(() => User, { nullable: true })
    me(
       @Ctx()  {req}: MyContext 
    ) {
        // you are not logged in
        if (req.session.userId) {
            return null;
        }

        return User.findOne({ id: req.session.userId });
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UserLoginInput,
        @Ctx() { req }: MyContext
    ):Promise<UserResponse> {
        const user = await User.findOne({ where: { email: options.email } })
        if (!user) {
            return {
                errors: [{
                    field: 'username',
                    message: 'User does not exist',
                }],
            }
        }

        const valid = await argon2.verify(user.password,options.password);
        
        if (!valid) {
            return {
               errors: [{
                    field: 'password',
                    message: 'incorrect password',
                }],
            }
        }

        req.session!.userId = user.id;

        return { user };
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UserRegistrationInput,
        @Ctx() { req }: MyContext): Promise<UserResponse> {
        
        if (options.password.length < 8) {
            return {
                errors: [{
                    field: "password",
                    message: "length must be at least 8 characters"
                }]
            }
        }

        const hashedPassword = await argon2.hash(options.password)  
         let user;
        try {
             const result = await getConnection().
                 createQueryBuilder()
                 .insert()
                 .into(User)
                 .values({
                     email: options.email,
                     name: options.name,
                     password: hashedPassword,
                 }).returning("*")
                 .execute();
            console.log('result:', result);
            user = result.raw[0];
        } catch (err) {
             if (err.code === '23505') {
                 return {
                     errors: [{
                         field: "username",
                         message: "username already  taken",
                     }]
                 }
             }
        }

        req.session.userId = user.id;
        return { user };
    }
    @Query(() => [User], {nullable:true})
    users(): Promise<User[]> {
        return User.find();
    }
}