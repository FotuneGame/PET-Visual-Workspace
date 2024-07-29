import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";


interface IProps{
    header?: string
    description?: string
    children: React.ReactNode
}

const Card:FC<IProps> = React.memo(({header,description, children}) =>{

    const [theme] = useContext(ThemeContext) ?? ["light"];

    return(
        <div className={[style.wrapper,theme==="light" ? style.light :style.dark].join(' ')}>
            { (header || description) &&
                <div className={style.header}>
                    {header && <h2>{header}</h2> }
                    {description && <p>{description}</p> }
                </div>
            }
            <div>
                {children}
            </div>
        </div>
    );
})

export default Card;