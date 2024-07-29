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
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Carousel from "@/components/ui/Carousel";
import Colapsible from "@/components/ui/Colapsible";



const Main = () =>{
    const value = useSelector((state:RootState) => state.test.value);
    const dispatch = useDispatch();

    //Don`t delete this hook (without it the app will not work!)
    const {t} = useTranslation();

    //exemple for inputs
    const [inputs,setInputs] = useState<{
        text:string,
        password:string,
        textaria:string,
        phone:string,
        email:string,
        checkbox: boolean,
        radio: string,
        color: string,
        number: string,
        range: string,
        files: FileList | null,
        date: string,
        time: string, 
    }>({
        text:"",
        password:"",
        textaria:"",
        phone:"",
        email:"",
        checkbox: false,
        radio: "",
        color: "",
        number: "",
        range: "",
        files: null,
        date:"",
        time:"",
    });
    useEffect(()=>{
        console.log(inputs);
    },[inputs])

    return(
        <>
            <Card header={"Redux"} description={"Redux inside card"}> 
                <button onClick={()=>dispatch(actions.setValue(value+1))}>plus</button>
                {value}
            </Card>
            <Card header={"Dropdowns"} description={"Dropdowns inside card"}> 
                <Dropdown name={t("language")}>
                    <SwitchLang />
                </Dropdown>

                <Dropdown name={t("theme.name")}>
                    <SwitchTheme />
                </Dropdown>
            </Card>
            <Card header={"Buttons"} description={"Buttons inside card"}> 
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
            </Card>
            
            <Card header={"Alert"} description={"Alert inside card"}> 
                <Alert type="error" message="Some message" header="Error"/>
                <Alert message="Some message" header="Info"/>
                <Alert type="error" message="Some message" header="Error" activeState={useState<boolean>(true)}/>
                <Alert message="Some message" header="Info" activeState={useState<boolean>(true)}/>
            </Card>
            <Card header={"Modal"} description={"Modal inside card"}> 
                <Modal name_btn="Modal btn" header="header modal">
                    Some shildren
                </Modal>
            </Card>

            <Card header={"Breadcrumb"} description={"Breadcrumb inside card"}> 
                <Breadcrumb arrayPath={[
                    {url:"/",name:"Главная"},
                    {url:"/about",name:"О нас"},
                    {url:"/file/1",name:"Файл 1"}
                ]}/>
            </Card>

            <Card header={"Inputs"} description={"Inputs inside card"}> 
                <Input type="text" label="Text" placeholder="some txt" value={inputs.text} callback={(e)=>(setInputs(state  => ({...state, text:e.target.value})) )}/>
                <Input type="text" disabled label="Text" placeholder="some txt" value={inputs.text} callback={(e)=>(setInputs(state  => ({...state, text:e.target.value})) )}/>
            
                <Input type="password" label="Password" placeholder="12345" value={inputs.password} callback={(e)=>(setInputs(state  => ({...state, password:e.target.value})) )}/>
                <Input type="password" disabled label="Password" placeholder="12345" value={inputs.password} callback={(e)=>(setInputs(state  => ({...state, password:e.target.value})) )}/>

                <Input type="textarea" label="TextAria" placeholder="some txt" value={inputs.textaria} callback={(e)=>(setInputs(state  => ({...state, textaria:e.target.value})) )}/>
                <Input type="textarea" disabled label="TextAria" placeholder="some txt" value={inputs.textaria} callback={(e)=>(setInputs(state  => ({...state, textaria:e.target.value})) )}/>

                <Input type="phone" label="Phone" placeholder="some txt" value={inputs.phone} callback={(e)=>(setInputs(state  => ({...state, phone:e.target.value})) )}/>
                <Input type="phone" disabled label="Phone" placeholder="some txt" value={inputs.phone} callback={(e)=>(setInputs(state  => ({...state, phone:e.target.value})) )}/>

                <Input type="email" label="Email" placeholder="some txt" value={inputs.email} callback={(e)=>(setInputs(state  => ({...state, email:e.target.value})) )}/>
                <Input type="email" disabled label="Email" placeholder="some txt" value={inputs.email} callback={(e)=>(setInputs(state  => ({...state, email:e.target.value})) )}/>

                <Input type="checkbox" label="Checkbox" value={inputs.checkbox} callback={(e)=>(setInputs(state  => ({...state, checkbox:(e.target as HTMLInputElement).checked})) )}/>
                <Input type="checkbox" disabled label="Checkbox" value={inputs.checkbox} callback={(e)=>(setInputs(state  => ({...state, checkbox:(e.target as HTMLInputElement).checked})) )}/>
            
                <Input type="radio" label="Radio 1" value={"1"} name={"Выборка radio"} callback={(e)=>(setInputs(state  => ({...state, radio:e.target.value})) )}/>
                <Input type="radio" label="Radio 2" value={"2"} name={"Выборка radio"} callback={(e)=>(setInputs(state  => ({...state, radio:e.target.value})) )}/>
                <Input type="radio" disabled label="Radio 1" value={"1"} name={"Выборка radio"} callback={(e)=>(setInputs(state  => ({...state, radio:e.target.value})) )}/>

                <Input type="color" label="Color" value={inputs.color} callback={(e)=>(setInputs(state  => ({...state, color:e.target.value})) )}/>
                <Input type="color" disabled label="Color" value={inputs.color} callback={(e)=>(setInputs(state  => ({...state, color:e.target.value})) )}/>

                <Input type="number" max={1000} min={-1000} step={0.01} label="Number" placeholder="some txt" value={inputs.number} callback={(e)=>(setInputs(state  => ({...state, number:e.target.value})) )}/>
                <Input type="number" disabled label="Number" placeholder="some txt" value={inputs.number} callback={(e)=>(setInputs(state  => ({...state, number:e.target.value})) )}/>

                <Input type="range" max={1000} min={-1000} step={10} label="Range" value={inputs.range} callback={(e)=>(setInputs(state  => ({...state, range:e.target.value})) )}/>
                <Input type="range" max={1000} min={-1000} step={10} disabled label="Range" value={inputs.range} callback={(e)=>(setInputs(state  => ({...state, range:e.target.value})) )}/>
            
                <Input type="file" label="Files" value={inputs.files} callback={(e)=>(setInputs(state  => ( {...state,files: (e.target as HTMLInputElement).files} )) )}/>
                <Input type="file" disabled label="Files" value={inputs.files} callback={(e)=>(setInputs(state  => ( {...state,files: (e.target as HTMLInputElement).files} )) )}/>

                <Input type="date" label="Date"  value={inputs.date} callback={(e)=>(setInputs(state  => ({...state, date:e.target.value})) )}/>
                <Input type="date" disabled label="Date"  value={inputs.date} callback={(e)=>(setInputs(state  => ({...state, date:e.target.value})) )}/>

                <Input type="time" label="Time"  value={inputs.time} callback={(e)=>(setInputs(state  => ({...state, time:e.target.value})) )}/>
                <Input type="time" disabled label="Time"  value={inputs.time} callback={(e)=>(setInputs(state  => ({...state, time:e.target.value})) )}/>
            </Card>
            

            <Card header={"Avatar"} description={"Avatar inside card"}>
                <Avatar src={"./media/avatar/1.webp"} alt={"Аватарка"}/>
            </Card>

            <Card header={"Badge"} description={"Badge inside card"}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <Badge type="agree" >Agree</Badge>

                        <Badge type="destructive" >destructive</Badge>

                        <Badge type="outline" >outline</Badge>

                        <Badge >default</Badge>
                </div>
            </Card>


            <Card header={"Header here"} description={"Description here"}>
                Some content right here...
            </Card>

            <Card header={"Header here"}>
                Some content right here...
            </Card>

            <Card description={"Description here"}>
                Some content right here...
            </Card>

            <Card>
                Some content right here...
            </Card>



            <Card header={"Carousel width horizontal"} description={"Carousel inside card"}>
                    <Carousel>
                        <Card header={"Header here 1"} description={"Description here 1"}>
                            Some content right here...
                        </Card>
                        <Card header={"Header here 2"} description={"Description here 2"}>
                            Some content right here...
                        </Card>
                        <Card header={"Header here 3"} description={"Description here 3"}>
                            Some content right here...
                        </Card>
                    </Carousel>
            </Card>
            <Card header={"Carousel width vertical"} description={"Carousel inside card"}>
                <div style={{ height: "400px"}}>
                    <Carousel orientation="vertical">
                        <Card header={"Header here 1"} description={"Description here 1"}>
                            Some content right here...
                        </Card>
                        <Card header={"Header here 2"} description={"Description here 2"}>
                            Some content right here...
                        </Card>
                        <Card header={"Header here 3"} description={"Description here 3"}>
                            Some content right here...
                        </Card>
                    </Carousel>
                </div>
            </Card>
            

            <Card header={"Colapsible"} description={"Colapsible inside card"}>
                <Colapsible name="Colapsible">
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                    <h1>4</h1>
                </Colapsible>
            </Card>


        </>
    )
}

export default Main;