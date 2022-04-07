import { getProductsById } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";


const ItemDetailContainer = () =>{

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsById(1).then( item => {
            setProducts(item)

        })

        return(() => {
            setProducts()
        })

    },[])
    
   

    return(
        
    
        <div>
         <ItemDetail{...products}/>
        </div>



    )

}

export default ItemDetailContainer;


