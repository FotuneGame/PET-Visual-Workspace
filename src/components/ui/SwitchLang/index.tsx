import React from "react";
import { useTranslation } from 'react-i18next';
import {langs} from "@/i18n";
import style from "./style.module.scss";
import Button from "../Button";



const SwitchLang = () => {
    const {i18n} = useTranslation();
    return(
        <div className={style.wrapper}>
        {
            (Object.keys(langs) as (keyof typeof langs)[]).map(lng=>{
                return <Button 
                    type="link"
                    key={lng} 
                    onClick={()=>i18n.changeLanguage(lng)} 
                    disabled={i18n.resolvedLanguage === lng}
                >
                    {langs[lng].nativeName}
                </Button>
            })
        }
        </div>
    );
}

export default SwitchLang;