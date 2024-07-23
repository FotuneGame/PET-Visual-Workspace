import React, {FC, useRef} from "react";
import style from "./style.module.scss";
import Button from "@ui/Button";
import { FiFilePlus } from "react-icons/fi";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    value?: any,
    disabled?: boolean
}

const FileInput:FC<IProps> = React.memo(({label,value,callback,disabled})=>{
    const ref = useRef(null);

    const [theme] = useContext(ThemeContext) ?? ["light"];
    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark, disabled ? style.disabled : ""].join(" ")}>
            <label>{label}</label>
            <div className={style.field}>
                <input ref={ref} type={"file"} onChange={callback} disabled={disabled}/>
                {
                    disabled ?
                        <FiFilePlus  color={"gray"} size="1.5rem"/>
                    :
                        <Button type="ghost" onClick={()=>{ref && ref.current && (ref.current as HTMLInputElement).click()}}>
                            <FiFilePlus  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                        </Button>
                }
            </div>
        </div>
    )
});

export default FileInput;