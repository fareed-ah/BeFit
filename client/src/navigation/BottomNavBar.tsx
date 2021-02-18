
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Profile from "../views/profile/Profile";
import AddWorkout from "../views/workouts/AddWorkoutPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import WorkoutStack from "./WorkoutStack";

const Tabs = createBottomTabNavigator()

const BottomNavBar = () => {
    return (
        <Tabs.Navigator
            //     initialRouteName="Workouts"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    // You can return any component that you like here!
                    if (route.name === "Workouts") {
                        return <Ionicons name="home-outline" size={size} color={color} />;
                    } else if (route.name === "Profile") {
                        return <Ionicons name="person-outline" size={size} color={color} />;
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Workouts' component={WorkoutStack} />
            <Tabs.Screen name='Profile' component={Profile} />
        </Tabs.Navigator>
    )
}

export default BottomNavBar