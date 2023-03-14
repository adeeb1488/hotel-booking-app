import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import './list.css'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
const List = () => {

  const location = useLocation()
  const[destination, setDestination] = useState(location.state.destination)
  const[date, setDate] = useState(location.state.date)
  const[options, setOptions] = useState(location.state.options)
  const[openDate,setOpenDate]=useState(false)
  
  const { data, loading, error } = useFetch(`/hotels?city=${destination}`);
  return (
    <div>
      
<Navbar />
<Header type="list"/>
<div className="listContainer">
  <div className="listWrapper">
    <div className="listSearch">
      <h1 className="lsTitle">
        Search
      </h1>
      <div className="lsItem">
        <label>Destination</label>
        <input placeholder={destination} type="text" />
      </div>
      <div className="lsItem">
        <label>Check-in Date</label>
        <span onClick={()=>setOpenDate(!openDate)}>
          {
            `${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
          }
        </span>
        { openDate &&(
          <DateRange
        onChange={(item)=>setDate([item.selection])}
        minDate={new Date()}
        ranges={date}
        />
        )
}
      </div>
      <div className="lsItem">
        <label>Options</label>
        <div className="lsOptions">

       
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Min Price:
            <small>per night</small>
          </span>
          <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Max Price:
            <small>per night</small>
          </span>
          <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Persons:
            
          </span>
          <input type="number" min={1} className="lsOptionInput" placeholder={options.persons}/>
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Rooms:
            
          </span>
          <input type="number" min={1} className="lsOptionInput" placeholder={options.rooms}/>
        </div>
</div>
      </div>
      <button>Search</button>
    </div>
    <div className="listResult">
      {loading?("Loading"):(
        <>
        {data.map(item=>(
          <SearchItem item={item} key={item._id}/>
        ))}
        
        </>
      )}
      
    </div>
  </div>
</div>
    </div>
  )
}

export default List