import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    placeholder?: string,
    value?: any,
    disabled?: boolean
}

const EmailInput:FC<IProps> = React.memo(({label,placeholder,value,callback,disabled})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <input placeholder={placeholder} type="email" value={value} onChange={callback} disabled={disabled}/>
        </div>
    )
});

export default EmailInput;