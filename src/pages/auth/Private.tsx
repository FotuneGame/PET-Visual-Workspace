import React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '@providers/AuthProvider';
import NotFound from "@/components/layout/NotFound";

const Private = () =>{
    const auth = useContext<boolean>(AuthContext);
    if(auth)
         return <Outlet/>
    else
        return <NotFound />;
}

export default Private;