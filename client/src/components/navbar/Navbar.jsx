import React, { useContext } from 'react'
import './Navbar.css'
import{Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
  const { user_name} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate("/login")
  }

  return (
    <div className='navbar'>
        <div className="navbarContainer">
           <Link to="/" style={{color:'inherit', textDecoration:'none'}}>
            <span className="logo">
                Hotel-booking-app
            </span>
            </Link> 
        {user_name?
        (<div className="greetings">
          Hi, {user_name.user_name} !
         </div>):
        (<div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={handleClick}className="navButton">Login</button>
        </div>)
}
        </div>

    </div>
  )
}

export default Navbar