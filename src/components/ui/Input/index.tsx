import React, {FC} from "react";
import TextInput from "./text";
import PasswordInput from "./password";
import Texrarea from "./textaria";
import PhoneInput from "./phone";
import EmailInput from "./email";
import Checkbox from "./checkbox";


//доделать с radio +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

interface IProps{
    type: "text" | "password" | "textarea" | "phone" | "email" | "checkbox" | "radio" | "color" | "date" | "time" | "number" | "range" | "url",
    callback: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
    placeholder?: string,
    rows?: number,
    max?:number,
    min?:number,
} 

const Input: FC<IProps> = React.memo(({
    type,
    callback,
    label,
    placeholder,
    value,
    rows,
    max,
    min,
})=>{
    switch (type){
        case "text":
            return <TextInput placeholder={placeholder} value={value} label={label} callback={callback}/>;
        case "password":
            return <PasswordInput placeholder={placeholder} value={value} label={label} callback={callback}/>;
        case "textarea":
            return <Texrarea placeholder={placeholder} value={value} label={label} callback={callback} rows={rows}/>;
        case "phone":
            return <PhoneInput placeholder={placeholder} value={value} label={label} callback={callback}/>;
        case "email":
            return <EmailInput placeholder={placeholder} value={value} label={label} callback={callback}/>;
        case "checkbox":
            return <Checkbox  value={value} label={label} callback={callback}/>;
        case "radio":
            return null;
        case "color":
            return null;
        case "date":
            return null;
        case "time":
            return null;
        case "number":
            return null;
        case "range":
            return null;
        case "url":
            return null;
        default:
            return <TextInput placeholder={placeholder} value={value} label={label} callback={callback}/>;
    }
})

export default Input;