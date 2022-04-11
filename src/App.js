
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import './components/ItemCount/ItemCount.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
    
    //const handleOnAdd = (quantify) =>{
    //    console.log("Se agregaron al carrito: ",quantify)
   // }
    
    return ( 
        <div className = "App">
            

            <BrowserRouter> 
                <header className = "App-header">
                    <NavBar/>  

                </header>  
                
               
                        <Routes>
                        
                            <Route path='/list' element={<ItemListContainer />} />
                            
                            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                        </Routes>

                       
            </BrowserRouter>

            
          

        </div>
    );
}

export default App;


//mi list container
//<ItemListContainer greeting = {"Comercio"}/>
//<ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>