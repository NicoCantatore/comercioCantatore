import '../ItemCount/ItemCount.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../Context/CartContext';
import { useNotification } from '../Notification/Notification'


const ItemDetail= ({id, name, img, category, description, price, stock }) => {
   
   
    const { addItem, getQuantityProd } = useContext(CartContext)
    
    const { setNotification } = useNotification()
 
    const handleAdd = (count) =>{
       
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
        setNotification('error', `Se agregaron ${count} ${name} correctamente`)
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
                
                    {false ? <Link to = '/cart'> ir al carrito</Link> : <ItemCount onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)} ></ItemCount>}
                    
                    
            </footer>
            
        </section>
    )
}



export default ItemDetail;


