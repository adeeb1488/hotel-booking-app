import React from 'react'
import { Link } from 'react-router-dom'
import './SearchItem.css'
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
        <img src={item.images[0]} alt="" className="siImg" />
 
    <div className="siDesc">
        <h1 className="siTitle">{item.hotel_name}</h1>
        <span className="siDistance">{item.distance}m from centre</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.hotel_description}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
       
       {item.hotel_rating&&<div className="siRating">
            <span>Excellent</span>
            <button>{item.hotel_rating}</button>
            </div>}
            <div className="siDetailsText">
                <span className="siPrice">
                    ${item.cheapestPrice}
                </span>
                <span className="siTaxOp">
                    Includes taxes and fees
                </span>
                <Link to={`/hotels/${item._id}`}>
                <button className='siCheckButton'>See availability</button>
                </Link>
            </div>

        
</div>
    
    </div>
  )
}

export default SearchItem