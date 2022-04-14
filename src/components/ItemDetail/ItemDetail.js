import '../ItemCount/ItemCount.css';
//import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ButtonCount = ({ onConfirm,  initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {

            setCount(count + 1)

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
            
        </div>
    )
}





const ItemDetail= ({id, name, img, category, description, price, stock }) => {
    //const [typeInput ,setTypeInput] = useState (true)

 

    const [quantity ,setQuantity] = useState (0)
    
 
    const handleAdd = (count) =>{
        console.log("Se agregaron al carrito: ",quantity)
        setQuantity(count)
        
    }

  

    return(
        <section className="containerC">
            <picture className="cardC">
                <img src={img} alt={name}/>
            </picture><br></br>
            
            <section>
                <h1 className="InfoC">
                    Categoria: {category}
                </h1>
                <h1 className="InfoC">
                    Descripción: {description}
                </h1>
                <h1 className="InfoC">
                    Precio: {price}
                </h1>
                
            </section>

            <footer className='FooterC'>
                
                    {quantity > 0 ? <Link to = '/cart'> ir al carrito</Link> : <ButtonCount onConfirm={handleAdd} stock={stock}></ButtonCount>}
                  


            
            
            </footer>
            
        </section>
    )
}



export default ItemDetail;


