import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../Pages/Shop'
import ShopCategory from '../Pages/ShopCategory'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import LoginSingup from '../Pages/LoginSingup'
import womenbinner from '../Component/Images/womenBenner.png'
import menbinner  from '../Component/Images/menbinner.png'
import kinbinner from '../Component/Images/kidbinner.png'

function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ < Shop/>}/>
            
            <Route path='/men' element={<ShopCategory banner={menbinner} category="men"/>}/>
            <Route path='/women' element={<ShopCategory banner={womenbinner}  category="women"/>}/>
            <Route path='/kid' element={<ShopCategory banner={kinbinner}  category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>

            </Route>

            <Route path='/cart' element={<Cart/>}/>
            <Route path='/loginsign' element={<LoginSingup/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoute


