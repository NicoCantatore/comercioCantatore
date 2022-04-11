import CartWidget from '../CartWidget/CartWidget.js';
import './Navbar.css'
import { Link, NavLink} from 'react-router-dom'
//import { useState, useEffect } from 'react';
//import { getCategories } from '../AsyncMock/AsyncMock'


const NavBar = () => {
    /*const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    }, [])

    //ver link en marca*/
    
    return (
        <nav>
               
              
            
            <Link to='/'><h2>Marca</h2></Link>
                
                
            
            
            <ul className="menu">
                
                <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>List</NavLink>
                
            </ul>

            <div>
              <CartWidget/>
            </div>
            

        </nav>
        
    )
}

export default NavBar;