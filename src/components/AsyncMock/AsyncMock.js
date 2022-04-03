
const products = [
    {
        id:1,
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 10
    }

]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

