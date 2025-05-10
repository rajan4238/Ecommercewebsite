
import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR MAILS</h1>
        <p>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</p>
        <div>
            <input type="email" placeholder='your mail id' />
        <button>SUBSCRIBE</button>
        </div>
     

    </div>
  )
}
