import CartWidget from '../CartWidget/CartWidget.js';
import './Navbar.css'
import { Link, NavLink} from 'react-router-dom'



const NavBar = () => {
  
    
    
    return (
        <nav>
               
              
            
            <Link to='/'><h2 className='titulox'>SK Reviews</h2></Link>
                
                
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