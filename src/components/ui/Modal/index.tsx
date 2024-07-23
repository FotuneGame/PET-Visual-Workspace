import React, {FC, useState} from "react";
import style from "./style.module.scss";
import Button from "../Button";
import { FiX  } from "react-icons/fi";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    name_btn:string,
    header: string,
    children: React.ReactChild,
}

const Modal:FC<IProps> = React.memo(({children,header,name_btn}) =>{

    const [active,setActive] = useState<boolean>(false);
    const [theme] = useContext(ThemeContext) ?? ["light"];

    return(
        <>
            <Button onClick={()=>{setActive(true)}}>{name_btn}</Button>
            {active && 
                <div className={style.wrapper} onClick={()=>{setActive(false)}}>
                    <div className={style.content}>
                        <div className={[style.back,theme==="light" ? style.light : style.dark].join(" ")}  onClick={(e)=>{e.stopPropagation()}}>
                            <div className={style.header}>
                                <h2>{header}</h2>
                                <Button type="ghost" onClick={()=>{setActive(false)}}>
                                    <FiX  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                                </Button>
                            </div>
                            <div className={style.body}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
});

export default Modal;