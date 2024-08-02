import React, {FC, useState, useContext} from "react";
import style from "./style.module.scss";
import {Button} from "../Button";
import { FiCode } from "react-icons/fi";

import { ThemeContext } from "@/providers";

interface IProps{
    name: string,
    children: React.ReactNode,
}

export const Colapsible: FC<IProps> = React.memo(({name, children})=>{
    
    const [acvitve, setActive] = useState<boolean>(false);
    const [theme] = useContext(ThemeContext) ?? ["light"];

    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <p>{name}</p>
                <Button type="ghost" onClick={()=>{setActive(!acvitve)}}>
                    <FiCode color={theme==="light" ? "black" : "white"} size="1rem" style={{transform: `rotate(90deg)`}}/>
                </Button>
            </div>
            <div className={style.content}>
                {acvitve ? children : React.Children.toArray(children)[0] }
            </div>
        </div>
    )
});