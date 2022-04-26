import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count += prod.quantity
        })

        return count
    }

    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const getQuantityProd = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }



    const calcularTotal =() => {
         
       return cart.reduce((acum,prod)=>acum+(prod.quantity*prod.price),0);
    }

    console.log(calcularTotal())
  
    
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clear,
            removeItem,
            getQuantityProd,
            calcularTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;