import React from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";
import style from "./style.module.scss";

const SwitchTheme = () =>{
    const context = useContext(ThemeContext);
    if(!context) return null;
    const [theme,setTheme] = context;

    return(
        <div className={style.wrapper}>
            <button onClick={()=>setTheme("light")} disabled={theme==="light"}>Light</button>
            <button onClick={()=>setTheme("dark")} disabled={theme==="dark"}>Dark</button>
            <button onClick={()=>setTheme(undefined)} disabled={localStorage.getItem("theme")==="system"}>System</button>
        </div>
    );
}

export default SwitchTheme;