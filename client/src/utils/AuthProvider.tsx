import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = null | { username: string }

export const AuthContext = React.createContext<{
    user: User,
    signIn: () => void,
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

    const [user, setUser] = useState<User>(null);

    return (<AuthContext.Provider value={{
        user,
        signIn: () => {
            const fakeUser = { username: "bob" };
            setUser(fakeUser);
            try {
                AsyncStorage.setItem('user', JSON.stringify(fakeUser))
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