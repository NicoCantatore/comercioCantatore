
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import {NotificationProvider} from './components/Notification/Notification'
import Form from './components/Form/Form'
import Enter from './components/entrada/entrada';

function App() {
    

    
    return ( 
        <div className = "App">
            <NotificationProvider>
                <CartContextProvider>
                    <BrowserRouter> 
                        <header className = "App-header">
                        <NavBar/>  

                        </header>  
                
                        <Routes>

                            <Route path='/' element={<Enter />} />
                            <Route path='/list' element={<ItemListContainer />} />
                            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/form' element={<Form />}/>
                            

                        </Routes>
                     

                       
                    </BrowserRouter>

                </CartContextProvider>
            </NotificationProvider>

        </div>
    );
}

export default App;


