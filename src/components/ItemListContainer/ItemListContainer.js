import { getProducts } from "../AsyncMock/AsyncMock";
import Itemlist from "../ItemList/ItemList";
import { useState,useEffect } from "react";

const ItemListContainer = (props) => {
    console.log(props) 
    console.log(props.greeting)

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then( prods => {
            setProducts(prods)


        })

    },[])

    return(
        <div>
            <h1>{props.greeting}</h1>
            
            <Itemlist products={products}/>
            
            
        </div>
       
    )
}

export default ItemListContainer;
