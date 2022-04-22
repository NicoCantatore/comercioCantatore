
import { useState } from 'react' 
import React from 'react'



const ItemCount = ({stock, initial=1, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    
    const decrement = () =>{
      setCount (count - 1) 
        }

    const increment = () =>{
        setCount (count +1) 
        }

    
    return(

        <div className='containerB'>
        
                <button onClick={decrement} className='ButtonCount'>-</button>
                <p>{count}</p> 
                <button onClick={increment} className='ButtonCount'>+</button><br/>
                <button onClick={()=>onAdd(count)} className='ButtonCount'>Agregar al Carrito</button>

        </div> 
    )


}

export default ItemCount;
