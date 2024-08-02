import React, {useContext} from "react";
import style from "./style.module.scss";
import { AuthContext } from "@/providers";
import { Button, SwitchLang, SwitchTheme, Dropdown} from "@/components/ui";
import Pages from "@/pages";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () =>{

    const auth = useContext(AuthContext);
    const navigation = useNavigate()
    const {t} = useTranslation();

    return(
        <nav className={style.wrapper}>
            <div className={style.content}>
                <h3>
                    Visual Worksapce
                </h3>
                {auth ? 
                <div>
                
                </div> 
                : 
                <div className={style.menu}>
                    <div className={style.sub_menu}>
                        <Dropdown name={t("navbar.link")}>
                            <div className={style.link_menu}>
                                <Button onClick={()=>{}} type="link">
                                    1
                                </Button>
                                <Button onClick={()=>{}} type="link">
                                    2
                                </Button>
                            </div>
                        </Dropdown>
                        <Dropdown name={t("language")}>
                            <SwitchLang />
                        </Dropdown>
                        <Dropdown name={t("theme.name")}>
                            <SwitchTheme />
                        </Dropdown>
                    </div>
                    <Button onClick={()=>{navigation(Pages.login.sign.url)}} type="agree">
                        {t("navbar.sign")}
                    </Button>
                </div>
                }
            </div>
        </nav>
    )
}