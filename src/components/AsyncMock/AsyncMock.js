const products = [
    {
        id:'1',
        name: 'El Visitante',
        img:'https://images.cdn1.buscalibre.com/fit-in/360x360/85/ba/85baf166a660e0046e8184f5ee4d0ab1.jpg',
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
        description:'Redrum. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Danny tenía cinco años. Y a esa edad pocos niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía. Pero Danny tenía pruebas de que sus fantasías relacionadas con el resplandor del espejo acabarían cumpliéndose: redrum� murder, asesinato. '
    },
    {
        id:'5',
        name: 'La sangre manda',
        img:'https://images.cdn1.buscalibre.com/fit-in/360x360/34/34/34346a2d2bc2528cf6b609c636d37f39.jpg',
        price: 3.019,
        category: 'Terror', 
        stock: 25, 
        description:'Stephen King nos brinda cuatro novelas  sobre las fuerzas ocultas que nos acechan. En esta colección única nos ofrece un impactante noir paranormal, protagonizado por la carismática Holly Gibney, y tres relatos más que ponen de manifiesto el incomparable talento, la imaginación sin par y la diversidad de registros de este legendario narrador. Cuanto más cruenta y violenta es una noticia, más llama la atención de la gente: «La sangre manda». '
    },
    {
        id:'6',
        name: 'Dr. Sueño',
        img:'https://images.cdn3.buscalibre.com/fit-in/360x360/6a/59/6a59801b06d2e2e9f6c636f52bfda228.jpg',
        price: 3.329,
        category: 'Terror', 
        stock: 25, 
        description:'Stephen King vuelve al mundo de El resplandor, una de sus novelas más queridas y emblemáticas. Ahora Danny Torrance, aquel niño aterrorizado del Hotel Overlook, es un adulto alcohólico atormentado por los fantasmas de su infancia. Un día se siente atraído por una ciudad de New Hampshire, donde encontrará trabajo en una residencia de ancianos y donde se apuntará a las reuniones de Alcohólicos Anónimos'
    },
    {
        id:'7',
        name: 'Mientras Escribo',
        img:'https://images.cdn3.buscalibre.com/fit-in/360x360/37/5a/375a304a36a9c03ba5c8f56092c86ddd.jpg',
        price: 2.159,
        category: 'Terror', 
        stock: 25, 
        description:'Mientras escribo empieza con el relato de la asombrosa infancia de Stephen King y su extraño y temprano interés por la escritura. Una serie de vívidos recuerdos de la adolescencia, de la universidad y de los años de lucha que lo llevaron a la culminación de su primera novela, Carrie,'
    },
    {
        id:'8',
        name: 'Cementerio de Animales',
        img:'https://images.cdn1.buscalibre.com/fit-in/360x360/47/c0/47c0c18a51917a5edcda0c4e405cef39.jpg',
        price: 2.789,
        category: 'Terror', 
        stock: 25, 
        description:'Church estaba allí otra vez, como Louis Creed temía y deseaba. Porque su hijita Ellie le había encomendado que cuidara del gato, y Church había muerto atropellado. Louis lo había comprobado: el gato estaba muerto, incluso lo había enterrado más allá del Cementerio de animales. Sin embargo, Church había regresado, y sus ojos eran más crueles y perversos que antes. Pero volvía a estar allí y Ellie no lo lamentaría. Louis Creed sí lo lamentaría. '
    },
    {
        id:'9',
        name: 'Imsonmnia',
        img:'https://images.cdn3.buscalibre.com/fit-in/360x360/75/ab/75ab965d59d8e44cfe55da40b5b3e5df.jpg',
        price: 4.229,
        category: 'Terror', 
        stock: 25, 
        description:'Ralph Roberts, a sus setenta años y tras la muerte de su mujer, siente que su vida se acaba. ¿Es acaso posible que su reciente viudez, unida a un persistente insomnio, sea la causa de esa nueva sensibilidad visual que, poco a poco, le permite ver el más allá de las personas? '
    },
    {
        id:'10',
        name: 'Carrie',
        img:'https://images.cdn1.buscalibre.com/fit-in/360x360/8a/e3/8ae3c1bb50b2ca58e598754df8e2a2c5.jpg',
        price: 2.159,
        category: 'Terror', 
        stock: 25, 
        description:'Puede que Carrie White no sea la chica más popular del colegio, pero tiene un poder único. Carrie es capaz de mover cosas con su mente. Las puertas se cierran. Las velas caen. Es su poder y su tragedia. Entonces, un acto de bondad, tan espontáneo como las constantes burlas de sus compañeros de clase, ofrece a Carrie la oportunidad de convertirse en alguien normal hasta que una inesperada crueldad transforma su don en un arma de horror y destrucción que nadie podrá olvidar jamás.'
    },
]

const categories = [
    {id: 'libro1', description: 'terror1'},
    {id: 'libro2', description: 'terror2'},
    {id: 'libro3', description: 'terror3'},
    {id: 'libro4', description: 'terror4'},
    {id: 'libro5', description: 'terror5'},
    {id: 'libro6', description: 'terror6'},
    {id: 'libro7', description: 'terror7'},
    {id: 'libro8', description: 'terror8'},
    {id: 'libro9', description: 'terror9'},
    {id: 'libro10', description: 'terror10'}
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