
import React from 'react'
import'./CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='Your password' />
          
        </div>
       <button>Continue</button>
       <p className='loginsignup-login'>Already have account?<span>login </span></p>
       <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By contuinuing,i agree to the therm of use & privacy policy</p>
       </div>
      </div>

    </div>
  )
}
