import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/AuthProvider";
import SplashScreen from "../views/SplashScreen";
import AuthStack from "./AuthStack";
import BottomNavBar from "./BottomNavBar";

const Routes = () => {
    const { user, signIn } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // check if user is logged in or not
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                //decode it
                signIn(user)
            }
            setLoading(false)
            console.log(userString)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })

    }, [])

    if (loading) {
        console.log(user)
        console.log(loading)
        return (
            <SplashScreen />
        )
    }
    console.log(loading)
    return (
        <NavigationContainer>
            {user ? (<BottomNavBar />) : (<AuthStack />)}
        </NavigationContainer>
    );
}

export default Routes;
