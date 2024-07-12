import React, { useContext } from 'react'
// import style from '../RelateProducts/RelateProduct.module.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'
function RelateProduct() {

    const {data} = useContext(ShopContext)
    console.log(data)
  return (
    <div className='relateProduct'>
        <h1>Relate Products</h1>
        <hr />
        <div className="relateProduct_item">
            {
                data.map((e) =>(
                    <Item key={e.id} {...e}/>
                ))
            }

        </div>
    </div>
  )
}

export default RelateProduct
