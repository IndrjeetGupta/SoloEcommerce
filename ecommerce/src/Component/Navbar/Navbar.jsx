import React, { useState } from 'react'
import image from '../Images/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
        
            <div className='navLogo'>
            <img src={image} alt=""  width={'100px'}/>
            <p>Shooper</p>

            </div>
            <div>
                <div  >
                <ul className='nav-menu'>
                <li onClick={() => setMenu('shop')} >< Link to='/' style={{textDecoration: "none" ,color: 'black'}}>Shop</Link>  {menu === 'shop' ?<hr /> :<></> } </li>
                <li onClick={() => setMenu('men')} > <Link to='/men' style={{textDecoration: "none",color: 'black'}}>Men</Link>  {menu === 'men' ?<hr /> :<></> } </li>
                <li onClick={() => setMenu('women')} ><Link to='/women'  style={{textDecoration: "none",color: 'black'}}>Women</Link> {menu === 'women' ?<hr /> :<></> }</li>
                <li onClick={() => setMenu('kid')} ><Link to='/kid'  style={{textDecoration: "none",color: 'black'}}>Electronic</Link> {menu === 'kid' ?<hr /> :<></> }</li>
            </ul>

                </div>


            </div>

            <div className='login'>
              <Link to='/loginsign'  style={{textDecoration: "none"}}><button className='loginbtn'>Login</button></Link>
                <Link to='/cart'  style={{textDecoration: "none",color: 'black'}}><span className='shop'>< FaCartShopping/></span></Link>
                <div className='nav_cart_count'>0</div>

                
            </div>

  
      
      
    </div>
  )
}

export default Navbar
