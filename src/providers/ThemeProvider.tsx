import { createContext, useEffect, useState } from "react";
import type { ThemeType, ThemeContextType} from "./types";

export const ThemeContext = createContext<ThemeContextType>(undefined);

const ThemeProvider = ({children}:Readonly<{children:React.ReactElement}>) =>{
    const [theme,setTheme] = useState<ThemeType>( localStorage.getItem("theme") as ThemeType);
    useEffect(()=>{
        switch(theme){
            case "dark":
                localStorage.setItem("theme","dark");
                document.body.classList.add("dark");
                setTheme("dark");
                break;
            case "light":
                localStorage.setItem("theme","light");
                document.body.classList.remove("dark");
                setTheme("light");
                break;
            default:
                if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                    localStorage.setItem("theme","system");
                    document.body.classList.add("dark");
                    setTheme("dark");
                }else{
                    localStorage.setItem("theme","system");
                    document.body.classList.remove("dark");
                    setTheme("light");
                }
                break;
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
