import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
   
    const { getQuantity } = useContext(CartContext)
   
    return(
        
        <div className="CartWidget">
        <Link to = '/cart'> <img src="./imagenes/carritos.png" className="CartImg" alt='carrito'/></Link> 
            
            { getQuantity() }
            
        </div>
    )
}

export default CartWidget;