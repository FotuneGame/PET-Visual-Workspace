import React, {FC, useContext, useState, useEffect} from "react";
import style from "./style.module.scss";
import Button from "../Button";
import { FiArrowLeft, FiArrowRight, FiArrowUp, FiArrowDown } from "react-icons/fi";

import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    children: React.ReactNode,
    orientation?: "vertical" | "horizontal",
}

const Carousel:FC<IProps> = React.memo( ({children,orientation})=>{

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [length, setLength] = useState<number>(React.Children.count(children));

    const [theme] = useContext(ThemeContext) ?? ["light"];

    useEffect(() => {
        setLength(React.Children.count(children));
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }



    if(orientation==="vertical"){
        return(
            <div className={style.container}>
                <div className={style.wrapper} style={{flexDirection: "column"}}>
                    {currentIndex > 0 &&
                        <Button className={style.btn_up} type="outline" onClick={prev}>
                            <FiArrowUp color={theme==="light" ? "black" : "white"} size="1rem"/>
                        </Button>
                    }
                    <div className={style.content_wrapper} style={{flexDirection: "column"}}>
                        <div className={style.content} style={{flexDirection: "column", transform:`translateY(-${currentIndex * 100}%)`}}>
                            {children}
                        </div>
                    </div>
                    {currentIndex < (length - 1) &&
                        <Button className={style.btn_down} type="outline" onClick={next}>
                            <FiArrowDown color={theme==="light" ? "black" : "white"} size="1rem"/>
                        </Button>
                    }
                </div>
            </div>
        )
    }else{
        return(
            <div className={style.container}>
                <div className={style.wrapper} style={{flexDirection: "row"}}>
                    {currentIndex > 0 &&
                        <Button className={style.btn_left} type="outline" onClick={prev}>
                            <FiArrowLeft color={theme==="light" ? "black" : "white"} size="1rem"/>
                        </Button>
                    }
                    <div className={style.content_wrapper} style={{flexDirection: "row"}}>
                        <div className={style.content} style={{flexDirection: "row", transform: `translateX(-${currentIndex * 100}%)`}}>
                            {children}
                        </div>
                    </div>
                    {currentIndex < (length - 1) &&
                        <Button className={style.btn_right} type="outline" onClick={next}>
                            <FiArrowRight color={theme==="light" ? "black" : "white"} size="1rem"/>
                        </Button>
                    }
                </div>
            </div>
        )
    }
});

export default Carousel;