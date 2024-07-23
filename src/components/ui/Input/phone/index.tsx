import React, {FC} from "react";
import style from "./style.module.scss";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

interface IProps{
    callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    placeholder?: string,
    value?: any,
}

const PhoneInput:FC<IProps> = React.memo(({label,placeholder,value,callback})=>{

    const [theme] = useContext(ThemeContext) ?? ["light"];

    const getOnlyNumber = (value:string) :string =>{
        return value.replace(/\D/g, '');
    }

    const valid = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let value = getOnlyNumber(e.target.value);

        if(e.target.value.length!==e.target.selectionStart){
            if(e.target.selectionStart  && /\D/g.test(e.target.value[e.target.selectionStart-1] )){
                e.target.value = "+" + value;
            }
            return callback(e);
        }

        if(value.length!=0){
            let formated_str = "";
            if(["7",'8','9'].indexOf(value[0])> -1){
                //russian number
                if(value[0]==='9') value = "7" + value;
                let first_symb = value[0]==='8' ? "8": "+7";
                formated_str = first_symb;
                if(value.length > 1){
                    formated_str += " (" + value.substring(1,4);
                }
                if (value.length >=5){
                    formated_str += ") " + value.substring(4,7);
                }
                if (value.length >=8){
                    formated_str += "-" + value.substring(7,9);
                }
                if (value.length >=10){
                    formated_str += "-" + value.substring(9,11);
                }
            }else{
                //other number
                formated_str = "+" + value.substring(0,16);
            }
            e.target.value = formated_str;
        }
        
        callback(e);
    }

    return(
        <div className={[style.wrapper,theme==='light' ? style.light : style.dark].join(" ")}>
            <label>{label}</label>
            <input placeholder={placeholder} type="tel" value={value} maxLength={18} onChange={valid}/>
        </div>
    )
});

export default PhoneInput;