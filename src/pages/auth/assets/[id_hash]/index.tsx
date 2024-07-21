import React from "react";
import { useParams } from "react-router-dom";

const Asset = () =>{
    const {id_hash} = useParams();
    return(
        <>
            Ассет + {id_hash}
        </>
    )
}

export default Asset;