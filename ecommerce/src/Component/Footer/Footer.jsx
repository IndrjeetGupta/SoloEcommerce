import React from 'react'
import footer from '../Footer/Footer.module.css'
import logo from '../Images/logo.png'
import facebook from '../Images/facebook.png'
import intra from '../Images/instragram.png'
import whatapp from '../Images/whatapp.png'


function Footer() {
  return (
    <div className={footer.footer}>
        <div className={footer.shooper}>
            <img src={logo} alt="" />
            <p>Shooper</p>
        </div>
        <ul className={footer.detail}>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={footer.socal_logo}>
            <img src={facebook} alt="" />
            <img src={intra} alt="" />
            <img src={whatapp} alt="" />

        </div>
        <div className={footer.footer_copy_right}>
            <hr />
            <p>CopyRight @ 2024 All Right Reserved</p>


        </div>
      
    </div>
  )
}

export default Footer
