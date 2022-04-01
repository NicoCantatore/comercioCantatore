
import { useState } from 'react' 



const ItemCount = () => {
    
    const [count, setCount] = useState(1)
    

    const decrement = () =>{
        console.log('decrement')
        setCount (count - 1) 
       
    }


    const increment = () =>{
        console.log('increment')
        setCount (count + 1)
        
    }

    const agregarCarrito = () =>{
        console.log('agregar')
        
       
       
        
    }

    
    return(

        <div className='containerB'>
        
                <button onClick={decrement} className='ButtonCount'>-</button>
                <p>{count}</p> 
                <button onClick={increment} className='ButtonCount'>+</button><br/>
                <button onClick={agregarCarrito} className='ButtonCount'>Agregar al Carrito</button>

        </div> 
    )


}

export default ItemCount;
