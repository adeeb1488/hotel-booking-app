import React from 'react'
import './FavouriteProperties.css'
const FavouriteProperties = () => {
  return (
    <div className='fp'>
    <div className="fpItem">
    <img src={require("../../assets/images/hotel.jpg")} alt="" className='fpImg' />  
    <span className="fpName">Apartment 1</span>
    <span className="fpCity">Tokyo</span>
    <span className="fpPrice">Starting from $120</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
    </div>
    <div className="fpItem">
    <img src={require("../../assets/images/hotel.jpg")} alt="" className='fpImg' />  
    <span className="fpName">Apartment 1</span>
    <span className="fpCity">Tokyo</span>
    <span className="fpPrice">Starting from $120</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
    </div>
    <div className="fpItem">
    <img src={require("../../assets/images/hotel.jpg")} alt="" className='fpImg' />  
    <span className="fpName">Apartment 1</span>
    <span className="fpCity">Tokyo</span>
    <span className="fpPrice">Starting from $120</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
    </div>
    </div>
  )
}

export default FavouriteProperties