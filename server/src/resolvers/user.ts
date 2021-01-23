import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import argon2 from 'argon2';

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
    async me(
       @Ctx()  {req, em}: MyContext 
    ) {
        // you are not logged in
        if (req.session.userId) {
            return null
        }

        const user = await em.findOne(User, { id: req.session.userId });
        return user;
    }


    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UserLoginInput,
        @Ctx() { em, req }: MyContext
    ):Promise<UserResponse> {
        const user = await em.findOne(User,  {email: options.email}) 
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
        @Ctx() { em, req }: MyContext): Promise<UserResponse> {
        
        if (options.password.length < 8) {
            return {
                errors: [{
                    field: "password",
                    message: "length must be at least 8 characters"
                }]
            }
        }
        
        const hashedPassword = await argon2.hash(options.password)  
        const user = em.create(User, {
            email: options.email,
            name: options.name,
            password: hashedPassword
        })
         try {
             await em.persistAndFlush(user);
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
}