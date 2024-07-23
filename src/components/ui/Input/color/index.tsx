import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    value?: any,
    disabled?:boolean
}

const ColorInput:FC<IProps> = React.memo(({label,value,callback,disabled})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper, theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <input type="color" value={value} onChange={callback} disabled={disabled}/>
        </div>
    )
});

export default ColorInput;