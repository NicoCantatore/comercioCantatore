
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
    
    return ( 
        <div className = "App">
            <ItemListContainer greeting = {"Hola"}/>
            <header className = "App-header">
                
                <NavBar/>
                
                
            </header> 
        
        </div>
    );
}

export default App;