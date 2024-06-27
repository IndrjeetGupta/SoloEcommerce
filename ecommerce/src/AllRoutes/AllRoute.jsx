import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../Pages/Shop'
import ShopCategory from '../Pages/ShopCategory'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import LoginSingup from '../Pages/LoginSingup'

function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ < Shop/>}/>
            <Route path='/men' element={<ShopCategory category="men"/>}/>
            <Route path='/women' element={<ShopCategory category="women"/>}/>
            <Route path='/kid' element={<ShopCategory category="kid"/>}/>
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

{/* <Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes> */}
