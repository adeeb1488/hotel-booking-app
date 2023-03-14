import React from 'react'
import './FavouriteProperties.css'
import useFetch from '../../hooks/useFetch'
const FavouriteProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className='fp'>
    {loading?"Loading" : <>
   
    {data?.map(item=>(

    <div className="fpItem" key={item._id}>
    <img src={item.images[0]} alt="" className='fpImg' />  
    <span className="fpName">{item.hotel_name}</span>
    <span className="fpCity">{item.city}</span>
    <span className="fpPrice">Starting from $ {item.cheapestPrice}</span>
   { item.hotel_rating
   &&<div className="fpRating">
        <button>{item.hotel_rating}</button>
        <span>Excellent</span>
    </div>
}
    </div>
  ))  
  }
    </>
    
  }

    </div>
  )
}

export default FavouriteProperties