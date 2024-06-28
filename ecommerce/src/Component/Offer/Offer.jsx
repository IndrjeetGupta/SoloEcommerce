import React from 'react'
import '../Offer/Offer.css'
import exculsive from '../Images/exculsive.png'

function Offer() {
  return (
    <div className='offer'>
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offer for you</h1>
            <p>Only one best seller product</p>
            <button>Check Now</button>


        </div>

        <div className="offer_light">
            <img src={exculsive} alt="" />

        </div>
      
    </div>
  )
}

export default Offer
