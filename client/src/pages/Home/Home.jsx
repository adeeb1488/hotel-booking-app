import React from 'react'
import FavouriteProperties from '../../components/favouriteProperties/FavouriteProperties'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/mailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/propertyList'

import './Home.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
         <PropertyList/>
         <h1 className="homeTitle">Guest Favourites</h1>
        <FavouriteProperties/>
        <MailList/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home