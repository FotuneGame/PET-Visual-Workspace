import React,{FC, useContext, useEffect, useRef, useState} from "react";
import style from "./style.module.scss";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useTranslation } from 'react-i18next';
import { usePositionContextmenu } from "@/hooks/usePositionContextmenu";

interface IProps{
    children?: React.ReactNode,
    menu?:React.ReactNode
}

const ContextMenu:FC<IProps> = React.memo(({children,menu})=>{

    const ref = useRef(null);
    const position = usePositionContextmenu(ref);
    const [active,setActive] = useState<boolean>(false);
    const [theme] = useContext(ThemeContext) ?? ["light"];
    const {t} = useTranslation();

    useEffect(()=>{
        setActive(false);
        console.log(children)
    },[children])

    return(
        <div ref={ref} className={[style.wrapper,theme==="light" ? style.light : style.dark].join(" ")} onClick={()=>{setActive(false)}} onContextMenu={()=>{setActive(true)}}>
            {children && React.Children.count(children)!==0 ? children : <p className={style.empty}>{t("input.workspace")}</p>}
            {active &&
                <div className={style.menu} style={{top:position.y+"px",left:position.x+"px"}} onClick={(e)=>e.stopPropagation()}>
                    {menu ? menu : `menu x: ${position.x} y: ${position.y}`}
                </div>
            }
        </div>
    )
})

export default ContextMenu;