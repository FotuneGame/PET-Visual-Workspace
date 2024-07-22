import React from "react";

import {RootState} from "@store/.";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "@store/slice/test";

import { useTranslation, Trans } from 'react-i18next';

import SwitchLang from "@/components/ui/SwitchLang";
import SwitchTheme from "@/components/ui/SwitchTheme";
import Button from "@/components/ui/Button";



const Main = () =>{
    const value = useSelector((state:RootState) => state.test.value);
    const dispatch = useDispatch();

    //Don`t delete this hook (without it the app will not work!)
    const {t} = useTranslation();

    return(
        <>

            <button onClick={()=>dispatch(actions.setValue(value+1))}>plus</button>
            {value}

            <SwitchLang />
            <Trans i18nKey={"Main"}/>
            <Trans i18nKey={"main_description"}/>

            <SwitchTheme />

            <>
                <Button type="agree" onClick={()=>{}} >Agree</Button>
                <Button type="agree" onClick={()=>{}} disabled>Agree</Button>

                <Button type="destructive" onClick={()=>{}} >destructive</Button>
                <Button type="destructive" onClick={()=>{}} disabled>destructive</Button>

                <Button type="outline" onClick={()=>{}} >outline</Button>
                <Button type="outline" onClick={()=>{}} disabled>outline</Button>

                <Button type="ghost" onClick={()=>{}} >ghost</Button>
                <Button type="ghost" onClick={()=>{}} disabled>ghost</Button>

                <Button type="link" onClick={()=>{}} >link</Button>
                <Button type="link" onClick={()=>{}} disabled>link</Button>

                <Button onClick={()=>{}} >default</Button>
                <Button onClick={()=>{}} disabled>default</Button>
            </>

        </>
    )
}

export default Main;