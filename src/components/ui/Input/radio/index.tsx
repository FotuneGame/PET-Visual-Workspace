import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    value?: any,
    name?: string,
    disabled?:boolean
}

const RadioInput:FC<IProps> = React.memo(({label,value,name,callback,disabled})=>{
    
    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper, theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <input type="radio" value={value} name={name}  onChange={callback} disabled={disabled}/>
        </div>
    )
});

export default RadioInput;