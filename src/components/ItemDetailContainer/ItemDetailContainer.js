import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../service/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () =>{
    const [products, setProducts] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProducts(product)
        })

        return (() => {
            setProducts()
        })

    }, [productId])

    return(
        
        
        

        <div>
         <ItemDetail {...products}  />
        </div>



    )

}

export default ItemDetailContainer;


