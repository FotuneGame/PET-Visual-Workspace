import React, { FC } from "react";
import style_dark from "./style_dark.module.scss";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    type?: "agree" | "destructive" | "outline" ,
    children?:React.ReactChild,
}

const Badge: FC<IProps> = React.memo(({type,children}) =>{
    const [theme] = useContext(ThemeContext) ?? ["light"];

    switch(type){
        case "agree":
            return(
                <div className={[style.btn, theme==="light" ? style.agree :  style_dark.agree].join(" ")}>
                    {children}
                </div>
            );
        case "destructive":
            return(
                <div className={[style.btn, theme==="light" ? style.destructive :  style_dark.destructive].join(" ")}>
                    {children}
                </div>
            );
        case "outline":
            return(
                <div className={[style.btn, theme==="light" ? style.outline :  style_dark.outline].join(" ")}>
                    {children}
                </div>
            );
        default:
            return(
                <div className={[style.btn, theme==="light" ? style.default :  style_dark.default].join(" ")}>
                    {children}
                </div>
            );
    }
});

export default Badge;