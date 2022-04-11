const products = [
    {
        id:'1',
        name: 'El Visitante',
        img:'https://http2.mlstatic.com/D_NQ_NP_837622-MLA45018347563_022021-O.webp',
        price: 2.789,
        category: 'Terror', 
        stock: 25, 
        description:'Un niño de once años ha sido brutalmente asesinado. Todas las pruebas apuntan a uno de los ciudadanos más queridos de Flint City: Terry Maitland, entrenador en la liga infantil. El detective Anderson ordena su detención. Maitland tiene una coartada firme que demuestra que estuvo en otra ciudad cuando se cometió el crimen, pero las pruebas de ADN encontradas en el lugar de los hechos confirman que es culpable. '
    },
    {
        id:'2',
        name: 'Misery',
        img:'https://images.cdn1.buscalibre.com/fit-in/360x360/68/7a/687abb5bce5d48dd6d027ba3dd825952.jpg',
        price: 3.099,
        category: 'Terror', 
        stock: 25, 
        description:'Un relato obsesivo y aterrador que solo Stephen King podía ofrecernos.Paul Sheldon es un escritor que sufre un grave accidente y recobra el conocimiento en una apartada casa en la que vive una misteriosa mujer corpulenta y de extraño carácter. Se trata de una antigua enfermera involucrada en varias muertes misteriosas ocurridas en diversos hospitales. Fanática de un personaje de una serie de libros que él ha decidido deja de escribir está dispuesto a hacer todo lo necesario para convencerlo de que retome la escritura.'
    },
    {
        id:'3',
        name: 'IT',
        img:'https://images.cdn2.buscalibre.com/fit-in/360x360/67/f3/67f3cb8e13492ff231c1acc31c474564.jpg',
        price: 4.831,
        category: 'Terror', 
        stock: 25, 
        description:'¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano?¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía, una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez.'
    },
    {
        id:'4',
        name: 'El Resplandor',
        img:'https://images.cdn3.buscalibre.com/fit-in/360x360/7c/c2/7cc2d89ff2df8d15fe52b511d8197a3f.jpg',
        price: 6.114,
        category: 'Terror', 
        stock: 25, 
        description:'Redrum. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años. Y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: redrum murder, asesinato. '
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