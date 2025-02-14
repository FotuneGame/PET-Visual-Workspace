import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    label?: string,
    placeholder?: string,
    value?: any,
    rows?: number,
    disabled?:boolean
}

const Texrarea:FC<IProps> = React.memo(({label,placeholder,value,callback, rows,disabled})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <textarea placeholder={placeholder} rows={rows ?? 3} value={value} onChange={callback} disabled={disabled}/>
        </div>
    )
});

export default Texrarea;