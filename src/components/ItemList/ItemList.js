import Item from "../Item/Item.js"


const Itemlist = ({products}) => {
    return(
        <div> 
           {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default Itemlist;