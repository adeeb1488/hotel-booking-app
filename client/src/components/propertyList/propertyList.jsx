import React from 'react'
import './propertyList.css'
const PropertyList = () => {
  return (
    <div className='pList'>
    <div className="pListItem">
        <img src={require("../../assets/images/hotel.jpg")} alt="" className="pListImg" />
    <div className="pListTitles">
        <h1>Hotels</h1>
        <h2>200 hotels</h2>

    </div>
    </div>
    <div className="pListItem">
        <img src={require("../../assets/images/hotel.jpg")} alt="" className="pListImg" />
    <div className="pListTitles">
        <h1>Villas</h1>
        <h2>200 hotels</h2>

    </div>
    </div>
    <div className="pListItem">
        <img src={require("../../assets/images/hotel.jpg")} alt="" className="pListImg" />
    <div className="pListTitles">
        <h1>Cabins</h1>
        <h2>200 hotels</h2>

    </div>
    </div>
    <div className="pListItem">
        <img src={require("../../assets/images/hotel.jpg")} alt="" className="pListImg" />
    <div className="pListTitles">
        <h1>Apartments</h1>
        <h2>200 hotels</h2>

    </div>
    </div>
    <div className="pListItem">
        <img src={require("../../assets/images/hotel.jpg")} alt="" className="pListImg" />
    <div className="pListTitles">
        <h1>Resorts</h1>
        <h2>200 hotels</h2>

    </div>
    </div>
    </div>
  )
}

export default PropertyList