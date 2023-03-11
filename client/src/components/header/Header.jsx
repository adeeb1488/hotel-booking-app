import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCar, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
     <div className="headerList">
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faBed} />
      <span>Stays</span>
      </div>
      <div className="headerListItem">
      <FontAwesomeIcon icon={faPlane} />
      <span>Flights</span>
      </div>
      <div className="headerListItem">
      <FontAwesomeIcon icon={faCar} />
      <span>Car rental</span>
      </div>
      <div className="headerListItem">
      <FontAwesomeIcon icon={faTaxi} />
      <span>Taxi</span>
      </div>
     </div>
     <h1 className="headerTitle">
      Hotels at affordable prices? Why not?
     </h1>
     <p className="headerDescription">
      Book a hotel for your stay today and get 10% cashback and savings. 
     </p>
     <button className="headerBtn">Sign in / Register</button>
     </div>
      </div>
  )
}

export default Header