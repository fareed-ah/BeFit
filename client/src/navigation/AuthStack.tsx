import { createStackNavigator } from "@react-navigation/stack"
import SignInPage from "../views/signin/SignIn"
import SignUpPage from "../views/signup/SignUp"
import { AuthParamList } from "./AuthParamList"
import React from 'react'

const Stack = createStackNavigator<AuthParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" options={{
                header: () => null,
            }} component={SignInPage} />

            <Stack.Screen name="SignUp" options={{
            }} component={SignUpPage} />
        </Stack.Navigator>)
}

export default AuthStack