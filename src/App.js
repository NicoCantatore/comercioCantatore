
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemCount/ItemCount.css';
import ItemCount from './components/ItemCount/ItemCount';





function App() {
 
    
    return ( 
        <div className = "App">
            

            <header className = "App-header">
                <NavBar/>  
            </header> 


            <ItemListContainer greeting = {"Comercio"}/>
            <ItemCount/>
          

           

        </div>
    );
}

export default App;