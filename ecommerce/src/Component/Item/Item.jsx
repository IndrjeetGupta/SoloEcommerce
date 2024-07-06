import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

function Item({image, price, category,id}) {
  return (
    <div className='item'>
        <Link to={`/product/${id}`}><img  src={image} alt="" /></Link>
        
        <div className='priceCategory'>
        <p>{price}</p>
        <p>{category}</p>

        </div>

      
    </div>
  )
}

export default Item
