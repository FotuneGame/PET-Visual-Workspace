import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    label: string,
    placeholder?: string,
    value?: any,
    rows?: number,
}

const Texrarea:FC<IProps> = React.memo(({label,placeholder,value,callback, rows})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark].join(" ")}>
            <label>{label}</label>
            <textarea placeholder={placeholder} rows={rows ?? 3} value={value} onChange={callback}/>
        </div>
    )
});

export default Texrarea;