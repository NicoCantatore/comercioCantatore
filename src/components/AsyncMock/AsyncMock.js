const products = [
    {
        id:'1',
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 10,
        category: 'Terror', 
        stock: 25, 
        description:'Libro de terror'
    },
    {
        id:'2',
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 10,
        category: 'Terror', 
        stock: 25, 
        description:'Libro de terror'
    },
    {
        id:'3',
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 10,
        category: 'Terror', 
        stock: 25, 
        description:'Libro de terror'
    },
    {
        id:'4',
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 10,
        category: 'Terror', 
        stock: 25, 
        description:'Libro de terror'
    },
]

const categories = [
    {id: 'libro1', description: 'terror1'},
    {id: 'libro2', description: 'terror2'},
    {id: 'libro3', description: 'terror3'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 200);
    })
}



export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        });
    })
}