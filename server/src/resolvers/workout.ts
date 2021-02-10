import { Workout } from "../entities/Workout";
import { MyContext } from "src/types";
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "src/middleware/isAuth";

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
    @UseMiddleware(isAuth)
    async createWorkout(
        @Arg('workoutName', () => String) workoutName: string,
        @Ctx() {req}:MyContext)
        : Promise<Workout> {
        return Workout.create({
            workoutName,
            userId: req.session.userId,
        }).save();
    }

    @Mutation(() => Workout, { nullable: true })
    @UseMiddleware(isAuth)
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
    @UseMiddleware(isAuth)
    async deleteWorkout(
        @Arg('id') id: number
    ): Promise<boolean> {
        await Workout.delete(id);
        return true;
    }
}