import React, {FC, useRef} from "react";
import style from "./style.module.scss";
import { FiClock   } from "react-icons/fi";
import {Button} from "../../Button";

import { useContext } from "react";
import { ThemeContext } from "@/providers";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    placeholder?: string,
    value?: any,
    disabled?:boolean
}

const TimeInput:FC<IProps> = React.memo(({label,placeholder,value,callback,disabled})=>{
    const ref = useRef(null);
    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <div className={style.field}>
                <input ref={ref} placeholder={placeholder} type="time" value={value} onChange={callback} disabled={disabled}/>
                {
                        disabled ?
                            <Button type="ghost" disabled onClick={()=>{}}>
                                <FiClock  color={"gray"} size="1.5rem"/>
                            </Button>
                        :
                            <Button type="ghost" onClick={()=>{ref && ref.current && (ref.current as HTMLInputElement).showPicker()}}>
                                <FiClock    color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                            </Button>
                }
            </div>
        </div>
    )
});

export default TimeInput;