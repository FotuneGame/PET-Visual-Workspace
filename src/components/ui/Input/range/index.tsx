import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext, useState} from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    placeholder?: string,
    value?: any,
    disabled?: boolean,
    min?: number,
    max?: number,
    step?: number
}

const RangeInput:FC<IProps> = React.memo(({label,placeholder,value,callback,disabled,min,max,step})=>{

    const [range] = useState<{maximum:number,minimum:number}>({
        maximum: max ?? 100,
        minimum: min ?? 0
    });

    const valid = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value.length>1){
            let value = Number(e.target.value);

            if(value > range.maximum) value = range.maximum;
            else if (value < range.minimum) value = range.minimum;

            e.target.value = value.toString();
        }
        callback(e);
    }

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}: {value ? value : 0}</label>
            <input placeholder={placeholder} step={step} max={range.maximum} min={range.minimum} type={"range"} value={value} onChange={valid} disabled={disabled}/>
        </div>
    )
});

export default RangeInput;