import React, { useContext } from 'react'
// import style from '../RelateProducts/RelateProduct.module.css'
import { ShopContext } from '../../Context/ShopContext'
function RelateProduct() {

    const {data} = useContext(ShopContext)
    console.log(data)
  return (
    <div >
        <h1>Relate Products</h1>
        <hr />
      
    </div>
  )
}

export default RelateProduct
