
import './App.css';
import useStore from './store';
import {Exitpopup,Entrypopup} from "./utils"
import Model  from "./modelpopup"
import ModelEntry from './modelpopup/Entry';
function App() {

   Exitpopup()
   Entrypopup()

   const pops=useStore((state)=>state.Exit)
   const Entry=useStore((state)=>state.Entry)
   
    return (
    <div className="App">
     <h2>Retainful Popups</h2>
    <nav>
        <ul>
            <li>
                <a href="#">Cart and Activity</a>
            </li>
            <li>
                <a href="#">Automation</a>
            </li>
            <li>
                <a href="#">Popups</a>
            </li>
        </ul>
    </nav>

    <section className="hero">
       <div className="info">
           <h2>We are Retainful</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, impedit! Ea incidunt amet quam nostrum numquam cum magnam! Dolore quis laborum cum neque rerum vero eveniet laudantium excepturi nemo alias?</p>
       </div>
       <div className="cta">
            <h3>Find out more about what we do...</h3>
            <button>Learn More</button>
       </div>
       <div className='popups'>
        {pops && 
         <Model /> 
        } 
        {
            Entry && <ModelEntry />
        }
        </div>    
    </section>
     
    </div>
  );
}

export default App;
