import { Workout } from "../entities/Workout";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class WorkoutResolver {
    @Query(() => [Workout])
    workouts(@Ctx() {em} : MyContext): Promise<Workout[]> {
        return em.find(Workout, {});
    }

    @Query(() => Workout, {nullable:true})
    workout(
        @Arg('id',()=> Int) id: number,
        @Ctx() { em }: MyContext): Promise<Workout | null> {
        return em.findOne(Workout, { id });
    }

    @Mutation(() => Workout)
    async createWorkout(
        @Arg('workoutName',()=> String) workoutName:string,
        @Ctx() { em }: MyContext): Promise<Workout> {
        const workout = em.create(Workout, {workoutName})
        await em.persistAndFlush(workout);
        return workout;
    }

    @Mutation(() => Workout, {nullable: true})
    async updateWorkout(
        @Arg('id') id:number,
        @Arg('workoutName',()=> String, {nullable: true}) workoutName:string,
        @Ctx() { em }: MyContext): Promise<Workout | null> {
        const workout = await em.findOne(Workout, { id });
        if (!workout) {
            return null;
        }
        if (typeof workoutName !== 'undefined') {
            workout.workoutName = workoutName;
            await em.persistAndFlush(workout)
        }
        return workout;
    }

    @Mutation(() => Boolean)
    async deleteWorkout(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext
    ): Promise<boolean> {
        await em.nativeDelete(Workout, { id });
        return true;
    }
}