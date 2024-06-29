import React from 'react'
import './Hero.css'
import hand_icon from '../Images/hand_icon.png'
import hero from '../Images/Hero.png'

function Hero() {
  return (
    <div className='hero'>

        <div className="hero_left" >
            <h2>New Arrival</h2>

            <div>
                <div className="hero_hand_icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p className='collectionHero'>Collection</p>
                <p className='everone'>Ever One</p>
            </div>

            <div className="hero_latest_item">
                <p>Latest Collection</p>
                <img src="" alt="" />
            </div>

        </div>
        <div className="hero_right">
            <img src={hero} alt="" />

        </div>
      
    </div>
  )
}

export default Hero
