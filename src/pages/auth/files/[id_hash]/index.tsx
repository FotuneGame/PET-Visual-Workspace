import React from "react";
import { useParams } from "react-router-dom";

const File = () =>{
    const {id_hash} = useParams();
    return(
        <>
            Файл + {id_hash}
        </>
    )
}

export default File;