import React, { useContext } from 'react'

import style from './CSS/ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/Item/Item'
import { Link } from 'react-router-dom'

function ShopCategory(props) {
  const {data} = useContext(ShopContext)
  return (
    <div className={style.shopeCategory}>
      <img src={props.banner} alt="" />
      <div className={style.shopeCategory_indexSort}>
        <p><span>shop 1-10</span>out of 20 </p>

        <div className={style.shopeCategory_sort}>
            <p>sort by</p>
        </div>
        {/* category */}

      </div>
      <div className={style.shopeCategory_product}>
        {
              data.map((e) =>{
                if (props.category === e.category){
                  return <div key={e.id} className={style.product}>
                   <Link to={`/product/${e.id}`}><img  src={e.image} alt="" /></Link>
                   
                    <p>{e.title}</p>
                    <p>{e.price}</p>


                  </div>
                }
                else{
                  return null
                }
              })
        }

      </div>
      <div className={style.exploreMore}>
        Explore More

      </div>
    </div>
  )
}

export default ShopCategory
