import React from 'react'
import './Header.css'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns' // theme css file
const Header = () => {
  const[openCalendar, setOpenCalendar]= useState(false)
  
  const [date, setDate]= useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key:'selection'
    }
  ])
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
     
     <div className="headerSearch">
     <div className="headerSearchItem">
     <FontAwesomeIcon icon={faBed} className="headerIcon" />
     <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
     </div>
     <div className="headerSearchItem">
     <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"  />
     <span onClick={()=>setOpenCalendar(!openCalendar)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
     {openCalendar&&<DateRange
     editableDateInputs={true}
     onChange={item=> setDate([item.selection])}
     moveRangeOnFirstSelection={false}
     ranges={date}
     className="date"
     
     />}
     </div>
     <div className="headerSearchItem">
     <FontAwesomeIcon icon={faPerson} className="headerIcon" />
     <span className='headerSearchText'>1 person 1 room</span>
     </div>
     <div className="headerSearchItem">
    <button className="headerBtn">Search</button>
     </div>
     </div>
     </div>

      </div>
  )
}

export default Header