import React from "react";
import { useParams } from "react-router-dom";

const Product = () =>{
    const {id_hash} = useParams();
    return(
        <>
            Продукт + {id_hash}
        </>
    )
}

export default Product;