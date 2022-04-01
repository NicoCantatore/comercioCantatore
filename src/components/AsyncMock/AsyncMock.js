
const products = [
    {
        id:1,
        name: 'El Visitante',
        img:"/public/imagenes/vs.jpg",
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

