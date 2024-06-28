import React from 'react'
import '../Item/Item.css'

function Item({image, price, category}) {
  return (
    <div className='item'>
        
        <img  src={image} alt="" />
        <div className='priceCategory'>
        <p>{price}</p>
        <p>{category}</p>

        </div>

      
    </div>
  )
}

export default Item
