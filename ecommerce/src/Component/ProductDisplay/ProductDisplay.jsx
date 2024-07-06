import React from 'react'
import style from '../ProductDisplay/ProductDisplay.module.css'

function ProductDisplay({image}) {
    
  return (
    <div className={style.ProductDisplay}>
        <div className={style.ProductDisplay_left}>

            <div className={style.ProductDisplay_img_list} >
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />

            </div>

            <div className={style.ProductDisplay_img} >
            <img src={image} alt="" />
           </div>

        </div>

        <div className={style.ProductDisplay_right}>

        </div>
      
    </div>
  )
}

export default ProductDisplay
