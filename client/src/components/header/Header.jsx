
import './Header.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns' // theme css file
const Header = ({type}) => {
  const[destination, setDestination]= useState("")
  const[openCalendar, setOpenCalendar]= useState(false)
  const[openOptions, setOpenOptions]= useState(false)
  
  const[options, setOptions]= useState({
    persons:1,
    rooms: 1
  })
  const [date, setDate]= useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key:'selection'
    }
  ])
  const navigate = useNavigate()
const handleOption =(name, operation) =>{
  setOptions((prev)=>{return{
    ...prev, [name]: operation === "i"?options[name] +1 : options[name]-1
  } })
}
const handleSearch=()=>{
  
  
  navigate("/hotels",{ state:{ destination, date, options } });


}






  return (
    <div className='header'>
      <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
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
     {
      type!=="list"&&
      <>
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
     <input type="text" placeholder='Where are you going?' className='headerSearchInput' 
     onChange={(e)=>setDestination(e.target.value)} />
     </div>
     <div className="headerSearchItem">
     <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"  />
     <span onClick={()=>setOpenCalendar(!openCalendar)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
     {openCalendar&&
     <DateRange
     editableDateInputs={true}
     onChange={item=> setDate([item.selection])}
     moveRangeOnFirstSelection={false}
     ranges={date}
     className="date"
      minDate={new Date()}
     />}
     </div>
     <div className="headerSearchItem">
     <FontAwesomeIcon icon={faPerson} className="headerIcon" />
     <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.persons} persons * ${options.rooms} rooms`}</span>
     {
      openOptions&&
     <div className="options">
      <div className="optionItem">
        <span className="optionText">Person</span>
        <div className="optionCounter">
        <button 
        disabled={options.persons<=1}
        className="optionCounterButton" onClick={()=> handleOption("persons","d")}>-</button>
       <span className="optionCounterNumber">{options.persons}</span>
        <button className="optionCounterButton"onClick={()=> handleOption("persons","i")}>+</button>
        </div>
      </div>
      <div className="optionItem">
        <span className="optionText">Rooms</span>
        <div className="optionCounter">
        <button 
        disabled={options.rooms<=1}
        className="optionCounterButton" onClick={()=> handleOption("rooms","d")}>-</button>
       <span className="optionCounterNumber">{options.rooms}</span>
        <button className="optionCounterButton" onClick={()=> handleOption("rooms","i")}>+</button>
        </div>
      </div>
     </div>
     }
     </div>
     <div className="headerSearchItem">
    <button className="headerBtn" onClick={handleSearch}>Search</button>
     </div>
     </div>
     </>}
     </div>

      </div>
  )
}

export default Header