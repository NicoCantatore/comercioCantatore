

const ItemDetail= ({id, name, img, category, description, price }) => {
    
    return(
        <section className="container">
            <picture className="card">
                <img src={img} alt={name}/>
            </picture><br></br>
            <h3>{name}</h3>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>
            
        </section>
    )
}

export default ItemDetail;






// mi archivo

/*
const items= ({title, id, price}) => {
    
    return(
        <section className="container">
            <picture className="card">
                <h2>{id} alt={title}</h2>
            </picture><br></br>
            <h3>{title}</h3>
            <p>{price}</p>
            
        </section>
    )
}

export default items;*/