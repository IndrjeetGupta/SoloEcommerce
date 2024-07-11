import React from 'react'
import style from '../DescriptionBox/DescriptionBox.module.css'

function DescriptionBox() {
  return (
    <div className={style.DescriptionBox}>
        <div className={style.DescriptionBox_navigator}>
            <div className={style.DescriptionBox_navigator_nab_box}>Description</div>
            <div className={style.DescriptionBox_navigator_nab_box_fade}>Review</div>
        </div>

        <div className={style.DescriptionBox_description}>
            <p>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.</p>

        </div>
      
    </div>
  )
}

export default DescriptionBox
