import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type WorkoutParamList = {
    Workouts: undefined,
    AddWorkout: undefined,
    ExerciseList: {workoutId:number},
    ExerciseDetail: undefined,
    AddExercise: {workoutId: number},
}

export type WorkoutStackProps<T extends keyof WorkoutParamList> = {
    navigation: StackNavigationProp<WorkoutParamList, T>;
    route: RouteProp<WorkoutParamList, T>;
}