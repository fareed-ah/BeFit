import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { WorkoutParamList } from "./WorkoutParamList";
import WorkoutsPage from "../views/workouts/WorkoutsPage";
import ExercisesList from "../views/exercise/ExerciseList";
import ExerciseDetail from "../views/exercise/ExerciseDetail";
import AddExercise from "../views/exercise/AddExercise";

const Stack = createStackNavigator<WorkoutParamList>()

const WorkoutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Workouts">
            <Stack.Screen name="Workouts" options={{
            }} component={WorkoutsPage} />
            <Stack.Screen name="ExerciseList" options={{
            }} component={ExercisesList} />
            <Stack.Screen name="ExerciseDetail" options={{
            }} component={ExerciseDetail} />
            <Stack.Screen name="AddExercise" options={{
            }} component={AddExercise} />
        </Stack.Navigator>)
}

export default WorkoutStack