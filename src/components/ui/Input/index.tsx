import React, {FC} from "react";
import TextInput from "./text";
import PasswordInput from "./password";
import Texrarea from "./textaria";
import PhoneInput from "./phone";
import EmailInput from "./email";
import Checkbox from "./checkbox";
import RadioInput from "./radio";
import ColorInput from "./color";
import NumberInput from "./number";
import RangeInput from "./range";
import FileInput from "./file";
import DataInput from "./date";
import TimeInput from "./time";


//доделать-сделать крутой color, date, time как в figma

interface IProps{
    type: "text" | "password" | "textarea" | "phone" | "email" | "checkbox" | "radio" | "color" | "number" | "range" | "file" | "date" | "time",
    callback: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label?: string,
    value: any,
    placeholder?: string,
    rows?: number,
    max?:number,
    min?:number,
    step?: number,
    name?:string,
    disabled?:boolean
} 

export const Input: FC<IProps> = React.memo(({
    type,
    callback,
    label,
    placeholder,
    value,
    rows,
    max,
    min,
    step,
    name,
    disabled
})=>{
    switch (type){
        case "text":
            return <TextInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "password":
            return <PasswordInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "textarea":
            return <Texrarea placeholder={placeholder} value={value} label={label} callback={callback} rows={rows} disabled={disabled}/>;
        case "phone":
            return <PhoneInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "email":
            return <EmailInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "checkbox":
            return <Checkbox  value={value} label={label} callback={callback} disabled={disabled}/>;
        case "radio":
            return <RadioInput name={name}  value={value} label={label} callback={callback} disabled={disabled}/>;
        case "color":
            return <ColorInput  value={value} label={label} callback={callback} disabled={disabled}/>;
        case "number":
            return <NumberInput step={step} max={max} min={min} placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "range":
            return <RangeInput step={step} max={max} min={min} placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "file":
            return <FileInput value={value} label={label} callback={callback} disabled={disabled}/>;
        case "date":
            return <DataInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        case "time":
            return <TimeInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
        default:
            return <TextInput placeholder={placeholder} value={value} label={label} callback={callback} disabled={disabled}/>;
    }
})