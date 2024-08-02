import React from "react";
import style from "./style.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/providers";

export const Loading =()=>{
    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={style.back}>
             <div className={[style.load,theme==="light" ? style.light : style.dark].join(" ")} />
        </div>
    )
}