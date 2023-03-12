import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">
            Affordable deals. Always.
        </h1>
        <span className="mailDesc">Interested in more exciting deals? Sign up to receive the best deals.</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList