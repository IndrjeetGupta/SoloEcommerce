import React from 'react'
import style from '../ProductDisplay/ProductDisplay.module.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function ProductDisplay({image,title,price}) {
    
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
          <h1>{title}</h1>
          <div className={style.ProductDisplay_right_star}>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <CiStar/>


          </div>
          <div className={style.ProductDisplay_right_price}>
            <p>Price {price}</p>

          </div>

          <div className={style.ProductDisplay_right_description}>
            <p>A product description is a form of marketing copy used to describe and explain the benefits of your product.</p>

          </div>

          <div className={style.ProductDisplay_right_size}>
            <div>S</div>
            <div>L</div>
            <div>M</div>
            <div>XL</div>
            <div>XXL</div>

          </div>
          <button>Add to Cart</button>
          <p className={style.ProductDisplay_right_category}><span>Category : </span> Women T-shirt, Crop, Top, </p>
          <p className={style.ProductDisplay_right_category}><span>Tags : </span> Morden, Latest </p>

        </div>
      
    </div>
  )
}

export default ProductDisplay
