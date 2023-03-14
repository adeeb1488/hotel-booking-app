import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'
const Featured = () => {
  
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=Dublin,Madrid,London,Tokyo")

  
  return (
    <div className='featured'>
      {
        loading?("Loading Please wait"):
        (
        <>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Dublin</h1>
        <h1>{data[0]} properties</h1>
      </div>
      </div>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Madrid</h1>
        <h1>{data[1]} properties</h1>
      </div>
      </div>
      <div className="featuredItem">
        <img src={require("../../assets/images/img1.jpg")} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Tokyo</h1>
        <h1>{data[2]} properties</h1>
      </div>
      </div>
      </>)}
    </div>
  )
}

export default Featured