import CartWidget from '../CartWidget/CartWidget.js';
import './Navbar.css'


const NavBar = () => {
    return (
        <nav>
            
            <ul className="menu">
                <li className ="button">libros accion</li>
                <li className ="button">libros terror</li>
                <li className ="button">libros ciencia ficcion</li>
            </ul>

            <div>
              <CartWidget/>
            </div>
            

        </nav>
        
    )
}

export default NavBar;