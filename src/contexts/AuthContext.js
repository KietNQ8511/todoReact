import React , { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isAuthenticated , setAuthenticated] = useState(false)

    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated)
    }

    const authContextData = {
        isAuthenticated,
        toggleAuth
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;