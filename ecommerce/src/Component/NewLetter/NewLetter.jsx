import React from 'react'
import newLetter from '../NewLetter/NewLetter.module.css'
function NewLetter() {
  return (
    <div className={newLetter.new_letter}>
      <h1>Get Exclusive offer on your email </h1>
      <p>Subscribe our new letter and stay update</p>
      <div className={newLetter.email}>
        <input type="email" name="" id=""  placeholder='   Enter your Email'/>
        <button>Subscribe</button>
      </div>
      
    </div>
  )
}

export default NewLetter
