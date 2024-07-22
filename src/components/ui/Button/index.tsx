import React, { FC } from "react";
import style_dark from "./style_dark.module.scss";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    type?: "agree" | "destructive" | "outline" | "ghost" | "link",
    disabled?: boolean,
    onClick:()=>void,
    children?:React.ReactChild,
}

const Button: FC<IProps> = React.memo(({type,disabled,onClick,children}) =>{
    const [theme] = useContext(ThemeContext) ?? ["light"];

    switch(type){
        case "agree":
            return(
                <button className={[style.btn, theme==="light" ? style.agree :  style_dark.agree].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
        case "destructive":
            return(
                <button className={[style.btn, theme==="light" ? style.destructive :  style_dark.destructive].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
        case "ghost":
            return(
                <button className={[style.btn, theme==="light" ? style.ghost :  style_dark.ghost].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
        case "link":
            return(
                <button className={[style.btn, theme==="light" ? style.link :  style_dark.link].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
        case "outline":
            return(
                <button className={[style.btn, theme==="light" ? style.outline :  style_dark.outline].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
        default:
            return(
                <button className={[style.btn, theme==="light" ? style.default :  style_dark.default].join(" ")} onClick={onClick} disabled={disabled}>
                    {children}
                </button>
            );
    }
});

export default Button;