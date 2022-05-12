*SK Reviews

Pagina con libros destacados del autor: Stephen King!!!

Comenzando 🚀
Para poder comenzar a visualizar proyecto..

Pre-requisitos 📋
Instalaciones en terminal:  npm istall (dentro del package.json)
                            npm install react-router-dom (libreria para poder router la app)
                            npm install firebase (para conectarse a firebase)
Se inicia proyecto con npm start

Resumen de la pagina:
En la lista de libros, se ingresa a ver detalle, se selecciona la cantidad de libros deseadas, se continua con la compra, ejecuta un resumen de la compra y se cierra con la orden de compra de los mismos.

Video del paso a paso:



Datos Tecnicos:
Se abre una carpeta components en la que se insertan las logicas y estilos para separar componentes y que sea mas facil visualizar y entender.

El inicio de la web (/ (entrada) veras el saludo inicial.
Alli tendras un boton List que te llevara a todos los productos con su precio y un boton que te llevara al detalle de cada uno.

*itemliscontainer (logica de traer productos fibebase )
importo getdocs (documentos de la db)
creo una funcion getdocs y le digo de donde tiene que buscar la collecion de lod productos de la respuesta
mapeos un returno de esa respuesta y de metodos que recibo doc.data desestructurado y doc.id para que queden al mismo nivel
y a traves del estado setproducts leo los productos
import las funcione query y where de firebase
y con un useEffect le paso que si tengo dentro de la funcion collectionRef un id de categoria
que lo filtre con query, sino que lo busque en la collecion de db  y con un where lo filtra y lo compara con  (categoryid) en la base de datos
 
*itemlist(como va a ser listado) importado de la logica del itemliscontainer
donde lo muestro mapeandolo en products.map
en un nuevo array de funnciones pasandole un key(props) con su id, y haciendo un spread operator para distribuir y asignarlo a item

*item (como se visualiza)
creo la funcon item y le paso id name img price (lo desestructuro)
retornando la card que voy a estar viendo en pantalla con un name precio e imagen

boton hacia detalle

*itemdetail contiene detalle del producto
funcion handleAdd se ejecuta en onAdd para agregar al carrito mostrando el contador en el cart
la cual tmb recibe stock e intitial que muesrtra la funcuin cantidad que la busca del id de cada producto en la base de datos guardados en el estado Getquantity
handleAdd tiene dentro de si una funcion objeto (productObj) a la que le pasa el id precio cantidad etcr tmb 
la funcion addItem traera el objeto guardado en el estado con el mismo nombre(producObj) y lo mostrara como notificacion(setnotificacion,mje tsmbien capturado de otro estado,importado de useNotofication) que a sido añadido al carrito

*notificacion (muestras los cambios al agregar o quitar elementos)

 
Desde aquí mismo podrás agregar la cantidad de libros que quieras a tu carrito gracias al componente ItemCount. 

*Itencount
se pasa a botones a taves de la propiedad on click parametros para ser ejecutados
ej on add para agregar carrito
necesito guardar datos en estados para que queden en las funciones
guardo la info dentro de los componentes NO son datos
por eso se le da a count un use

CartWidget mostrara lo que agregues a tu carrito.

cart mostrara el resumen de compre vaciar y eliminar compra o el total
ademas nos mostrara el total de la compra.
Tambien un boton continuar compra

*cart guardo y seteo dentro de la una funcion para añadir carrito llamo al producto 
y lo leo en setcart desestructurando cart y product en spread operator
con la funcion getQuantity leo la cantidad de count 
pasandolor por una funcion forEach() ejecutando uncallback una vez por cada elemento del prod devolviendole un valor
retornando la cantidad 
usamos un context cart que le pasamos parametros como total remover  y mapeamos en un return
dandole valor a un key con el id del producto , nombre de producto etc
calcular total se lo improta de la funcion desde cartcontext retornando con un reduce
se hace un if preview que cuente si tiene productos y sino salga una leyenda

*cartwidget
llamo a getquantity para que se visualice el carrito la cantidad agregada con dicha funcion
la funcion clear  se le pasa el estado del set cart para borrar todo el contenido con un array vacio
la funcion isInCart se le pasa el parametro de el id de productos para que la funcion some lo recorre y encuentre algun 
valor booleano(true o false) y ver si hay productos o no para que no se agreguen de mas
la funcion removeItem se le da el parametro del id del producto y con la funcion filter,guardado en una nueva constante,lo recorre y filtra el producto ,devolviendo un valor verdadero(uso logica preguntado si el valor devuelto es verdadero)
todas las funciones devueltaes en el contextprovider que se importaran en la app

continuar compra lleva hacia un form 
que nos preguntara los datos basicos para poder finalizar la compra y devolvernos un cupon con el numero de compra
y un boton de volver a comprar que lleva a list para comenzar nuevamente.


*form
creo un estado con un id de compra y un setcompra para poder devolver el num de orden de compra con un return
realizamos un if preview con loading para cortar el return principal y dejar un mje
luego de este un if con el id de compra con el mje de retorno del id de compra
estados previamente cargados en constantes
boton submit con evenlistener que escubel con un onsubmit del formulario
con la funcion handlesubmit
creo un estado input que lo leo con handlesubmit y lo seteo cpn set input..
onchange escucha un evento del estado setinput
cuando ejecuto finalizar compra ejecuto createorder con el evento onclik y ejecuto la funcuion handlesubmit del onsubmit del form
creo una constante handlechange con un evento y una resevada target de react que me toma el estado del value (valor nombre tel ) y lo retorna


Construido con 🛠️
ReactJs
Html
Css
Utilizando como base de datos Firebase

Licencia 
Puedes mejorarlo!!!, pero recuerda poner en donde lo encontraste! ;).

Autor ✒️
Guillermo Nicolas Cantatore


Gracias a mi profesor Sebastian Zuviria 
y tutor Rodrigo Maestre por las explicaciones y el aguante!
⌨️ por NicoCantatore 