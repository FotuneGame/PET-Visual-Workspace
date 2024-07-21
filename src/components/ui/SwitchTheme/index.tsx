import React from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { ThemeContextType, ThemeType } from "@/providers/types";
import { useContext } from "react";

const SwitchTheme = () =>{
    const context = useContext<ThemeContextType>(ThemeContext);
    if(!context) return null;
    const [theme,setTheme] = context;

    return(
        <>
            <button onClick={()=>setTheme("light")} disabled={theme==="light"}>Light</button>
            <button onClick={()=>setTheme("dark")} disabled={theme==="dark"}>Dark</button>
            <button onClick={()=>setTheme("system")} disabled={theme==="system"}>System</button>
        </>
    );
}

export default SwitchTheme;