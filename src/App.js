
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemCount/ItemCount.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
    
    const handleOnAdd = (quantify) =>{
        console.log("Se agregaron al carrito: ",quantify)
    }
    
    return ( 
        <div className = "App">
            

            <header className = "App-header">
                <NavBar/>  
            </header> 


            <ItemListContainer greeting = {"Comercio"}/>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
            <ItemDetailContainer ></ItemDetailContainer>
          

        </div>
    );
}

export default App;


//mi list container
//<ItemListContainer greeting = {"Comercio"}/>
//<ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>