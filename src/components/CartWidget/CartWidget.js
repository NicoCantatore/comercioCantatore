import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const CartWidget = () =>{
   
    const { getQuantity } = useContext(CartContext)
   
    return(
        <div className="CartWidget">
            <img src="./imagenes/carritos.png" className="CartImg" alt='carrito'/>
            { getQuantity() }
        </div>
    )
}

export default CartWidget;