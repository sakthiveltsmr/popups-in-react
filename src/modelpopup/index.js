
import './style.css';
import useStore from '../store';
const Model=()=>{
  const setpops=useStore((state)=>state.setExit)

  const close=(e)=>{
    e.preventDefault()
    setpops(false)
  }

 return( 
 <form className="popup">
    <h1 className="close" onClick={(e)=>close(e)}>X</h1>
    <h1 className="body">Thank You !</h1>
    <p>And some dummy content that shows on this popup Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ratione quisquam iure libero impedit aspernatur, expedita quaerat mollitia delectus, eius ad excepturi inventore aperiam perspiciatis voluptatum porro. Tenetur libero, aspernatur nobis quod autem assumenda, nostrum esse reiciendis quibusdam vitae iure harum illum similique consectetur ut ipsam, at repellendus! Nulla est debitis illo.</p>
  </form>
  )
}

export default Model