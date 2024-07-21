import React from "react";
import { useParams } from "react-router-dom";

const Project = () =>{
    const {id_hash} = useParams();
    return(
        <>
            Проект + {id_hash}
        </>
    )
}

export default Project;