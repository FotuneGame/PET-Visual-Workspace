import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    placeholder?: string,
    value?: any,
}

const EmailInput:FC<IProps> = React.memo(({label,placeholder,value,callback})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark].join(" ")}>
            <label>{label}</label>
            <input placeholder={placeholder} type="email" value={value} onChange={callback}/>
        </div>
    )
});

export default EmailInput;