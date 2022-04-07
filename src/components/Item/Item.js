import './item.css';
const Item= ({id, name, img, price}) => {
    
    return(
        <section className="container">
            <picture className="card">
                <img src={img} alt={name}/>
            </picture><br></br>
            <h3>{name}</h3>
            <p>precio {price}</p>
            <button>el id es {id}</button>
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