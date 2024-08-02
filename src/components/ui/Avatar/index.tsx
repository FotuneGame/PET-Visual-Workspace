import React, { FC } from "react";
import style from "./style.module.scss";

interface IProps{
    src: string,
    alt?: string,
}

export const Avatar:FC<IProps> = React.memo(({src,alt}) =>{
    return (
        <div className={style.wrapper}>
            <img src={src} alt={alt}/>   
        </div>
    )
});
