import {getDocs, collection, query, where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../service/firebase'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')
        

    getDocs(collectionRef).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
    })

}, [categoryId])

    return(
        <div>
            
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;

