import { Workout } from "../entities/Workout";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { IdentityMap } from "@mikro-orm/core";
import { PostgreSqlConnection } from "@mikro-orm/postgresql";

@Resolver()
export class WorkoutResolver {
    @Query(() => [Workout])
    workouts(): Promise<Workout[]> {
        return Workout.find();
    }

    @Query(() => Workout, {nullable:true})
    workout(
        @Arg('id') id: number): Promise<Workout | undefined> {
        return Workout.findOne(id);
    }

    @Mutation(() => Workout)
    async createWorkout(
        @Arg('workoutName',()=> String) workoutName:string): Promise<Workout> {
        return Workout.create({workoutName}).save();
    }

    @Mutation(() => Workout, {nullable: true})
    async updateWorkout(
        @Arg('id') id:number,
        @Arg('workoutName',()=> String, {nullable: true}) workoutName:string): Promise<Workout | null> {
        const workout = await Workout.findOne(id);
        if (!workout) {
            return null;
        }
        if (typeof workoutName !== 'undefined') {
           await Workout.update({ id }, { workoutName });
        }
        return workout;
    }

    @Mutation(() => Boolean)
    async deleteWorkout(
        @Arg('id') id: number
    ): Promise<boolean> {
        await Workout.delete(id);
        return true;
    }
}