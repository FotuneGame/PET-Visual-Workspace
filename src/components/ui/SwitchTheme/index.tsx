import React from "react";
import { ThemeContext } from "@/providers";
import { useContext } from "react";
import style from "./style.module.scss";
import {Button} from "../Button";
import { useTranslation } from 'react-i18next';



export const SwitchTheme = () =>{
    const {t} = useTranslation();
    const context = useContext(ThemeContext) ;
    if(!context) return null;
    const [theme,setTheme] = context;

    return(
        <div className={style.wrapper}>
            <Button type="link" onClick={()=>setTheme("light")} disabled={theme==="light"}>{t("theme.light")}</Button>
            <Button type="link" onClick={()=>setTheme("dark")} disabled={theme==="dark"}>{t("theme.dark")}</Button>
            <Button type="link" onClick={()=>setTheme(undefined)} disabled={localStorage.getItem("theme")==="system"}>{t("theme.system")}</Button>
        </div>
    );
}