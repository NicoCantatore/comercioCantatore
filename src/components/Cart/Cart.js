import {useContext} from "react"
import CartContext from "../Context/CartContext"
import './Cart.css';
const Cart = () => {
    const { cart, removeItem} = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <h1>No hay productos</h1>
        )
    }

    return (
        <div className="cartNot" >
        <h1>Cart</h1>
        
        <ul className="Not"> 
            {
                cart.map(prod => <li key={prod.id}>{prod.name}   cantidad :  {prod.quantity} precio: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        </div>
        
    )
}


export default Cart;

