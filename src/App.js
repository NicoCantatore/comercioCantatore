
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import './components/ItemCount/ItemCount.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import {NotificationProvider} from './components/Notification/Notification'

function App() {
    
    //const handleOnAdd = (quantify) =>{
    //    console.log("Se agregaron al carrito: ",quantify)
   // }
    
    return ( 
        <div className = "App">
            <NotificationProvider>
                <CartContextProvider>
                    <BrowserRouter> 
                        <header className = "App-header">
                        <NavBar/>  

                        </header>  
                
                        <Routes>

                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/list' element={<ItemListContainer />} />
                            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />

                        </Routes>
                     

                       
                    </BrowserRouter>

                </CartContextProvider>
            </NotificationProvider>

        </div>
    );
}

export default App;


//mi list container
/*<Routes>
                        
<Route path='/list' element={<ItemListContainer />} />

<Route path='/detail/:productId' element={<ItemDetailContainer />} />
</Routes>*/
