import { Exercise } from "../entities/Exercise";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class ExerciseInput {
    @Field()
    exerciseName: string
    @Field()
    sets: string
    @Field()
    restTime: string
    @Field()
    notes:string
}

@Resolver()
export class ExerciseResolver {

    @Query(() => [Exercise],{nullable:true})
    allExercises(): Promise<Exercise[]> {
        return Exercise.find();
    }

     @Query(() => [Exercise],{nullable:true})
    exercises(@Arg('workoutId') id: number): Promise<Exercise[]> {
        return Exercise.find({workoutId: id});
    }

    @Query(() => Exercise, {nullable:true})
    exercise( @Arg('id') id: number): Promise<Exercise | undefined> {
        return Exercise.findOne(id);
    }

    @Mutation(() => Exercise)
    async createExercise(
        @Arg('options') options: ExerciseInput,
        @Arg('workoutId') workoutId: number,
        @Ctx() {}:MyContext)
        : Promise<Exercise> {
        return Exercise.create({
            ...options,
            workoutId: workoutId
        }).save();
    }

    @Mutation(() => Boolean)
    async deleteExercise(
        @Arg('id') id: number
    ): Promise<boolean> {
        await Exercise.delete(id);
        return true;
    }
}