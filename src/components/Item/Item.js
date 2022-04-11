import './item.css';
import {  NavLink } from 'react-router-dom';

const Item= ({id, name, img, price}) => {
    
    return(
        <section className="container">
            <picture className="card">
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <p>precio {price}</p>
            
            <NavLink to={`/detail/${id}`} className={({ isActive }) => isActive ? 'ActiveOptionB' : 'OptionB'}>Ver detalle</NavLink>
        </section>
    )
}

export default Item;


/*
import './item.css';
const Item= ({name, img, price}) => {
    
    return(
        <section className="container">
            <picture className="card">
                <img src={img} alt={name}/>
            </picture><br></br>
            <h3>{name}</h3>
            <p>{price}</p>
            <button>detalle</button>
        </section>
    )
}

export default Item;
*/