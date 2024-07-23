import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

import { FiX , FiAlertOctagon, FiTerminal   } from "react-icons/fi";
import Button from "../Button";

interface IProps{
    type?: "error"
    activeState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    message?: string,
    header: string
}




const Alert:FC<IProps> = React.memo(({type,activeState,message,header}) =>{

    const [theme] = useContext(ThemeContext) ?? ["light"];
    if(activeState && !activeState[0]) return null;
    switch(type){
        case "error":
            return(
                <div className={style.wrapper_error}>
                    <FiAlertOctagon color="#EF4444" size="1.5rem"/>
                    <div>
                        <h3>{header}</h3>
                        <p>{message}</p>
                    </div>
                    {activeState &&
                        <Button type="ghost" onClick={()=>{activeState[1](false)}}>
                            <FiX  color="#EF4444" size="1.5rem"/>
                        </Button>
                    }
                </div>
            )
        default:
            return(
                <div className={[style.wrapper,theme==="light" ? style.light :style.dark].join(' ')}>
                    <FiTerminal  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                    <div>
                        <h3>{header}</h3>
                        <p>{message}</p>
                    </div>
                    {activeState &&
                        <Button type="ghost" onClick={()=>{activeState[1](false)}}>
                            <FiX  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
                        </Button>
                    }
                </div>
            )
    }
})

export default Alert;