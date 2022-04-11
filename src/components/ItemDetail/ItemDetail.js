

const ItemDetail= ({id, name, img, category, description, price }) => {
    
    return(
        <section className="containerC">
            <picture className="cardC">
                <img src={img} alt={name}/>
            </picture><br></br>
            
            <section>
                <h1 className="InfoC">
                    Categoria: {category}
                </h1>
                <h1 className="InfoC">
                    Descripción: {description}
                </h1>
                <h1 className="InfoC">
                    Precio: {price}
                </h1>
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