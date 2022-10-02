
import './App.css';
import useStore from './store';
import {Exitpopup,Entrypopup} from "./utils"
import Model  from "./modelpopup"
import ModelEntry from './modelpopup/Entry';
import CartActivity from './components/CartActivity';
import Automation from './components/Automation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Popup from './components/Popup';

function App() {
  

   Exitpopup()
   Entrypopup()

   const pops=useStore((state)=>state.Exit)
   const Entry=useStore((state)=>state.Entry)
   
    return (

   <div className='main'>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
<Route path='/automation' element={<Automation/>}/>
<Route path='/cartactivity' element={<CartActivity/>}/>
<Route path='/popup' element={<Popup/>}/>

</Routes>
</BrowserRouter>
        
       <div className='popups'>
        {pops && 
         <Model /> 
        } 
        {
            Entry && <ModelEntry />
        }
        </div>    
    
    </div>
  );
}

export default App;
