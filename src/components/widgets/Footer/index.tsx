import React,{FC, useContext} from "react";
import style from "./style.module.scss";

import { ThemeContext } from "@/providers";

export const Footer = () =>{

    const [theme]= useContext(ThemeContext) ?? ['light'];
    //className={[style.wrapper,theme==='light' ? style.light : style.dark].join(' ')}

    return(
        <footer className={style.wrapper}>
            FOOTER
        </footer>
    )
}