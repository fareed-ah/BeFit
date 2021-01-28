import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../generated/graphql';

export type UserInfo = {
    __typename?: "User";
} & Pick<User, "email" | "id">

export const AuthContext = React.createContext<{
    user: UserInfo,
    signIn: (user: UserInfo) => void,
    signOut: () => void,
    signUp: () => void,
}>({
    user: null,
    signIn: () => { },
    signOut: () => { },
    signUp: () => { },
});

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {

    const [user, setUser] = useState<UserInfo>(null);

    return (<AuthContext.Provider value={{
        user,
        signIn: (user: UserInfo) => {
            setUser(user);
            try {
                AsyncStorage.setItem('user', JSON.stringify(user))
            } catch (e) {
                // saving error
            }
        },
        signOut: () => {
            try {
                setUser(null);
                AsyncStorage.removeItem("user")
            } catch (e) {
                // saving error
            }
        },
        signUp: () => {

        }
    }}>{props.children}</AuthContext.Provider>)
}

export default AuthProvider