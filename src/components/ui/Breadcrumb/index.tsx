import React, {FC} from "react";
import style from './style.module.scss';
import { useContext } from "react";
import { ThemeContext } from "@/providers";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

type BreadcrumbElemetType = {
    url:string,
    name:string
}

interface IProps{
    arrayPath:Array<BreadcrumbElemetType>,
    key_hash?:string,
}

export const Breadcrumb: FC<IProps> = React.memo(({arrayPath,key_hash})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];

    return(
        <ul className={style.wrapper}>
            { arrayPath.map((el,index)=>{
                if(arrayPath.length-1!==index){
                    return (
                        <li className={style.block} key={"breadcrumb_"+key_hash+"_"+index}>
                            <Link className={style.link} to={el.url}>{el.name}</Link>
                            <FiChevronRight  color={"gray"} size="1rem"/>
                        </li>
                    );
                }else{
                    return (
                        <li key={"breadcrumb_last_"+key_hash+"_"+index}>
                            <p className={[style.link_disabled,theme==="light" ? style.light : style.dark].join(" ")}>{el.name}</p>
                        </li>
                    );
                }
            })}
        </ul>
    )
});
