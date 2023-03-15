import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const[credentials, setCredentials] = useState({
    user_name:undefined,
    password:undefined
  })

  const { loading, error, dispatch} = useContext(AuthContext)


  const navigate = useNavigate()
  const handleChange =(e)=>{
    setCredentials(prev=>({...prev,[e.target.id]: e.target.value}))
  }

  const handleClick = async(e)=>{
    e.preventDefault()
    console.log(credentials)
    dispatch({type:"LOGIN_START"})
    try{
        
        const res = await axios.post("/auth/signin", credentials)
       
        dispatch({type: "LOGIN_SUCCESS", payload:res.data})
        navigate("/")
    }catch(err){
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }

  }

 
    return (
    <div className='login'>
        <div className="lContainer">
          <div className="pageTitle">Hotel-booking-app</div>
          <div className="welcomeMessage">Please Sign in to continue</div>
            <input type="text" placeholder='username' id='user_name' onChange={handleChange} className="lInput" />
            <input type="password" placeholder='password' id='password' onChange={handleChange} className="lInput" />
            <button disabled={loading} onClick={handleClick}className="lButton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login