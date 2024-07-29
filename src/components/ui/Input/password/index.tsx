import React, {FC, useState} from "react";
import style from "./style.module.scss";
import Button from "@ui/Button";
import { FiEye, FiEyeOff    } from "react-icons/fi";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    placeholder?: string,
    value?: any,
    disabled?: boolean
}

const PasswordInput:FC<IProps> = React.memo(({label,placeholder,value,callback,disabled})=>{
    const [view,setView] = useState<boolean>(false);

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <div className={style.field}>
                <input placeholder={placeholder} type={view ? "text" : "password"} value={value} onChange={callback} disabled={disabled}/>
                {
                    disabled ?
                        <Button type="ghost" disabled onClick={()=>{}}>
                            <FiEyeOff  color={"gray"} size="1.5rem"/>
                        </Button>
                    :
                        <Button type="ghost" onClick={()=>{setView(!view)}}>
                            {
                                view ?
                                <FiEye  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                                :
                                <FiEyeOff   color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                            }
                        </Button>
                }
            </div>
        </div>
    )
});

export default PasswordInput;