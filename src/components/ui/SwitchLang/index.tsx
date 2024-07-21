import React from "react";

import { useTranslation, Trans } from 'react-i18next';
import {langs} from "@/i18n";

const SwitchLang = () => {
    const {i18n} = useTranslation();
    return(
        <>
        {
            (Object.keys(langs) as (keyof typeof langs)[]).map(lng=>{
                return <button 
                    key={lng} 
                    onClick={()=>i18n.changeLanguage(lng)} 
                    disabled={i18n.resolvedLanguage === lng}
                >
                    {langs[lng].nativeName}
                </button>
            })
        }
        </>
    );
}

export default SwitchLang;