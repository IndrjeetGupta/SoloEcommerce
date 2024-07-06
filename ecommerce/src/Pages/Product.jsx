import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/BreadCrum/BreadCrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'


function Product() {
  const {data} = useContext(ShopContext)
 

  const {productId} = useParams()

  const product = data.find((e) => e.id === productId)
  console.log(product.price)

 
 
  return (
    <div>
      <BreadCrum {...product}/>
      <ProductDisplay {...product} />
  
    </div>
  )
}

export default Product
