import React from "react";
import { useParams } from "react-router-dom";

const Team = () =>{
    const {id_hash} = useParams();
    return(
        <>
            Команда + {id_hash}
        </>
    )
}

export default Team;