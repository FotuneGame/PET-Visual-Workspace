import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    value?: any,
}

const Checkbox:FC<IProps> = React.memo(({label,value,callback})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark].join(" ")}>
            <label>{label}</label>
            <input type="checkbox" checked={value} onChange={callback}/>
        </div>
    )
});

export default Checkbox;