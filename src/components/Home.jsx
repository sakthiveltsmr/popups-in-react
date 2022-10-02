import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App"> 
     <h2>Retainful Popups</h2>
    <nav>
        <ul>
            <li>
                <Link to="/cartactivity">Cart and Activity</Link>
            </li>
            <li>
            <Link to="/automation">Automation</Link>
            </li>
            <li>
            <Link to="/popup">Popups</Link>
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
       </section>
     
    </div>
  )
}

export default Home