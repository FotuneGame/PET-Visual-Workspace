import React, {useState,useEffect} from "react";
import type {PostitionType} from "./types";

export function usePositionContextmenu(ref : React.MutableRefObject<HTMLElement> | React.MutableRefObject<null>){
    const [position,setPosition] = useState<PostitionType>({x:0,y:0});

    useEffect(()=>{

        function handleWindowContextmenu(event:  MouseEvent){
            if(ref  && event && ref.current && ref.current.contains(event.target as HTMLElement)){
                event.preventDefault();
                setPosition({
                    x: event.pageX,
                    y: event.pageY,
                    });
            }
        }

        window.addEventListener('contextmenu', handleWindowContextmenu);
        return () => {
            window.removeEventListener('contextmenu',handleWindowContextmenu,);
        };
    }, [ref]);

    return position;
}