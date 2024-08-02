import React, {FC, useState, useContext} from "react";
import style from "./style.module.scss";
import {Input} from "../Input";
import {Button} from "../Button";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "@/providers";
import { useTranslation } from 'react-i18next';

interface IProps{
    arraysCommand: { 
        [key: string]: {
            names:Array<string>,
            icons?:Array<React.ReactElement>
        }
    },
    callback:(command:string)=>void;
}

export const Command: FC<IProps> = React.memo(({arraysCommand, callback})=>{
    
    const [theme] = useContext(ThemeContext) ?? ["light"];
    const [command,setCommand] = useState<string>("");
    const {t} = useTranslation();


    return(
        <div className={[style.wrapper,theme==="light" ? style.light : style.dark].join(" ")}>
            <div className={style.search}>
                <Input type="text" placeholder={t("input.search")} value={command} callback={(e)=>setCommand(e.target.value)}/>
                <FiSearch  color={theme==="light" ? "black" : "white"} size="1.5rem"/>
            </div>
            <div className={style.content}>
                {
                    Object.keys(arraysCommand).map((key,index_category)=>{
                        const commands = arraysCommand[key].names.filter((el)=>el.includes(command));
                        if(commands.length>0){
                            return(
                                <div key={"command_category_key_"+index_category}>
                                    <div className={style.category}>
                                        <p>{key}</p>
                                    </div>
                                    <div className={style.list_commands}>
                                        {
                                            commands.map((el,index_command)=>{
                                                return(
                                                    <div className={style.command} key={"command_component_"+index_command }>
                                                        {
                                                            (Number(arraysCommand[key]?.icons?.length) > index_command) 
                                                            &&
                                                            arraysCommand[key].icons?.[index_command]
                                                        }
                                                        <Button type="ghost" onClick={()=>{callback(el)}}>{el}</Button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }else return null;
                    })
                } 
                <div className={style.end}>
                    <p>...</p>
                </div>
            </div>
        </div>
    );
});