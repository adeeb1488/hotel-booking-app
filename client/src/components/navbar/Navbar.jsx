import React from 'react'
import './Navbar.css'
import{Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
           <Link to="/" style={{color:'inherit', textDecoration:'none'}}>
            <span className="logo">
                Hotel-booking-app
            </span>
            </Link> 
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
        </div>

    </div>
  )
}

export default Navbar