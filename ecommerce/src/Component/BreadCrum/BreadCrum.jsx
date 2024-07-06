import React from 'react'
import style from '../BreadCrum/BreadCrum.module.css'

function BreadCrum({category,title}) {
    
  return (
    <div className={style.BreadCrum}>
        Home <img src="" alt="" /> Shop <img src="" alt="" /> {category} <img src="" alt="" /> {title}
      
    </div>
  )
}

export default BreadCrum
