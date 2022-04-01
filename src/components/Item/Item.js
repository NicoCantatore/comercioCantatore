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