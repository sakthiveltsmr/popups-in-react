
import './style.css';
import useStore from '../store';
const Model=({setpopup})=>{
  const setpops=useStore((state)=>state.setExit)

  

 return( 
 <form className="popup">
    <button className="close" onClick={()=>setpops(false)}>X</button>
    <h1 className="body">welcome to retainfull</h1>
  </form>
  )
}

export default Model