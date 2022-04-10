import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;

/*const ItemListContainer = (props) => {
    
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

export default ItemListContainer;*/

//mio
//<Itemlist products={products}/>
//             <p>Cargando...</p>