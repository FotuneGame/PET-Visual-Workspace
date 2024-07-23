import React, { useEffect, useState } from "react";

import {RootState} from "@store/.";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "@store/slice/test";

import { useTranslation } from 'react-i18next';

import SwitchLang from "@/components/ui/SwitchLang";
import SwitchTheme from "@/components/ui/SwitchTheme";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Alert from "@/components/ui/Alert";
import Modal from "@/components/ui/Modal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Input from "@/components/ui/Input";



const Main = () =>{
    const value = useSelector((state:RootState) => state.test.value);
    const dispatch = useDispatch();

    //Don`t delete this hook (without it the app will not work!)
    const {t} = useTranslation();

    //exemple for inputs
    const [inputs,setInputs] = useState({
        text:"",
        password:"",
        textaria:"",
        phone:"",
        email:"",
        checkbox: false
    });

    useEffect(()=>{
        console.log(inputs);
    },[inputs])

    return(
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}>

                <button onClick={()=>dispatch(actions.setValue(value+1))}>plus</button>
                {value}

                <Dropdown name={t("language")}>
                    <SwitchLang />
                </Dropdown>

                <Dropdown name={t("theme.name")}>
                    <SwitchTheme />
                </Dropdown>

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
            </div>
            <>
                <Alert type="error" message="Some message" header="Error"/>
                <Alert message="Some message" header="Info"/>
                <Alert type="error" message="Some message" header="Error" activeState={useState<boolean>(true)}/>
                <Alert message="Some message" header="Info" activeState={useState<boolean>(true)}/>
            </>
            <>
                <Modal name_btn="Modal btn" header="header modal">
                    Some shildren
                </Modal>
            </>

            <Breadcrumb arrayPath={[
                {url:"/",name:"Главная"},
                {url:"/about",name:"О нас"},
                {url:"/file/1",name:"Файл 1"}
            ]}/>

            <>
                <Input type="text" label="Text" placeholder="some txt" value={inputs.text} callback={(e)=>(setInputs(state  => ({...state, text:e.target.value})) )}/>
                <Input type="password" label="Password" placeholder="12345" value={inputs.password} callback={(e)=>(setInputs(state  => ({...state, password:e.target.value})) )}/>
                <Input type="textarea" label="TextAria" placeholder="some txt" value={inputs.textaria} callback={(e)=>(setInputs(state  => ({...state, textaria:e.target.value})) )}/>
                <Input type="phone" label="Phone" placeholder="some txt" value={inputs.phone} callback={(e)=>(setInputs(state  => ({...state, phone:e.target.value})) )}/>
                <Input type="email" label="Email" placeholder="some txt" value={inputs.email} callback={(e)=>(setInputs(state  => ({...state, email:e.target.value})) )}/>
                <Input type="checkbox" label="Checkbox" value={inputs.checkbox} callback={(e)=>(setInputs(state  => ({...state, checkbox:(e.target as HTMLInputElement).checked})) )}/>
            </>
        </>
    )
}

export default Main;