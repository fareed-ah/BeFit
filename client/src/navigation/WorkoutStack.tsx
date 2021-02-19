import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { WorkoutParamList } from "./WorkoutParamList";
import WorkoutsPage from "../views/workouts/WorkoutsPage";
import ExercisesList from "../views/exercise/ExerciseList";
import ExerciseDetail from "../views/exercise/ExerciseDetail";
import AddExercise from "../views/exercise/AddExercise";
import AddWorkout from "../views/workouts/AddWorkoutPage";

const Stack = createStackNavigator<WorkoutParamList>()

const WorkoutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Workouts">
            <Stack.Screen name="Workouts" options={{
                title: "Workouts"
            }} component={WorkoutsPage} />
            <Stack.Screen name="AddWorkout" options={{
                title: "Add Workout"
            }} component={AddWorkout} />
            <Stack.Screen name="ExerciseList" options={({ route }) => ({
                title: route.params.workoutName,
            })} component={ExercisesList} />
            <Stack.Screen name="ExerciseDetail" options={({ route }) => ({
                title: route.params.exerciseName,
            })} component={ExerciseDetail} />
            <Stack.Screen name="AddExercise" options={{
            }} component={AddExercise} />
        </Stack.Navigator>)
}

export default WorkoutStack