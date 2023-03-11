import React from 'react'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Dublin</h1>
        <h1>123 properties</h1>
      </div>
      </div>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Tokyo</h1>
        <h1>123 properties</h1>
      </div>
      </div>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Reno</h1>
        <h1>123 properties</h1>
      </div>
      </div>
    </div>
  )
}

export default Featured