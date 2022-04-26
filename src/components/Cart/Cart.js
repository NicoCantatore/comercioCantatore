import {useContext} from "react"
import CartContext from "../Context/CartContext"
import './Cart.css';


const Cart = () => {
    const { cart, removeItem, calcularTotal,clear} = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <h1>No hay productos</h1>
        )
    }

    return (

        
        <div className="cartNot" >
        <h1>Resumen de Compra </h1>
        <div > </div>
        

        <section className="Not"> 
            {
                cart.map(prod => <p className="textoCompra" key={prod.id}>{prod.name} <br></br> <br></br>  cantidad :  {prod.quantity}  precio: {prod.price}   subtotal: {prod.quantity *prod.price} <button className="removeIte" onClick={() => removeItem(prod.id)}> X </button></p>)}
                <p className="textoTotall">Total: {calcularTotal()}<br></br></p>
                <button className="ButtonCount" onClick={()=> clear()}>Vaciar carrito</button>
          
        </section>
        </div>
        
    )
}


export default Cart;

