import React, { FC , useState, useContext, useRef, useEffect} from "react";
import style from "./style.module.scss";
import Button from "../Button";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useOutside } from "@/hooks/useOutside";

interface IProps{
    name:string,
    children:React.ReactChild
}

const Dropdown: FC<IProps> = ({name,children}) =>{
    const ariaRef = useRef(null);
    const outside = useOutside(ariaRef);
    const [theme] = useContext(ThemeContext) ?? ["light"];
    const [active,setActive] = useState<boolean>(false);

    useEffect(()=>{
        if(outside)
            setActive(false);
    },[outside]);

    return(
        <div ref={ariaRef}>
            <Button type="outline" onClick={()=>setActive(!active)}>{name}</Button>
            {active &&             
                <div className={[style.wrapper,theme==="light" ? style.light : style.dark].join(" ")}>
                    {children}
                </div>
            }
        </div>
    );
}

export default Dropdown;