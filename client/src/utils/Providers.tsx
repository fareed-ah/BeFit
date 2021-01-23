import React from "react"
import Routes from "../navigation/Routes"
import AuthProvider from "./AuthProvider"

interface ProvidersProps {

}

const Providers = (props: ProvidersProps) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>);
};
export default Providers