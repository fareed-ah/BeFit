import React from "react"
import Routes from "../navigation/Routes"
import AuthProvider from "./AuthProvider"
import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'http://192.168.2.14:4000/graphql',
});

interface ProvidersProps {

}

const Providers = (props: ProvidersProps) => {
    return (
        <Provider value={client}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Provider>
    );
};
export default Providers