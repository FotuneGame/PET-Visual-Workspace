import React from "react";

import {RootState} from "@store/.";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "@store/slice/test";

const Main = () =>{
    const value = useSelector((state:RootState) => state.test.value);
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={()=>dispatch(actions.setValue(value+1))}>plus</button>
            Главная {value}
        </>
    )
}

export default Main;