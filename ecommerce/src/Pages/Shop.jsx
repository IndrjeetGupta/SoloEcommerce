import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewLetter from '../Component/NewLetter/NewLetter'
import Footer from '../Component/Footer/Footer'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewLetter/>
        <Footer/>
      
    </div>
  )
}

export default Shop
