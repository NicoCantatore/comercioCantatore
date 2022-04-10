import { getProductsById } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{

    const [products, setProducts] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then( item => {
            setProducts(item)

        })

        return(() => {
            setProducts()
        })

    },[productId])
    
   

    return(
        
        
        

        <div>
         <ItemDetail {...products}/>
        </div>



    )

}

export default ItemDetailContainer;


