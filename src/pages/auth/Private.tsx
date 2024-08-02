import React from "react";
import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '@providers';
import {NotFound} from "@widgets";

const Private = () =>{
    const auth = useContext<boolean>(AuthContext);
    if(auth)
         return <Outlet/>
    else
        return <NotFound />;
}

export default Private;