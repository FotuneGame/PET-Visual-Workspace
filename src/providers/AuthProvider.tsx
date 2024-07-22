import React, { useEffect } from "react";
import { createContext,useState } from "react";
import { check_auth } from "@/utils/check_auth";

export const AuthContext = createContext<boolean>(false);

const AuthProvider = ({children}:Readonly<{children:React.ReactElement}>) =>{

    //for test you can change check_auth() to true => get page for auth user
    const [auth,setAuth] = useState<boolean>(check_auth());
    useEffect(()=>{
        setAuth(check_auth());
    },[localStorage.getItem("access_token")]);

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;