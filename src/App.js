import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='/orders' element={<Orders></Orders>}/>
        <Route path='/inventory' element={<Inventory></Inventory>}/>
        <Route path='/about' element={<About></About>}/>
      </Routes>
   
    </div>
  );
}

export default App;
