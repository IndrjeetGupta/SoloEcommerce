import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/BreadCrum/BreadCrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelateProduct from '../Component/RelateProducts/RelateProduct'


function Product() {
  const {data} = useContext(ShopContext)
  console.log(data)
 

  const {productId} = useParams()

  const product = data.find((e) => e.id === productId)
  console.log(product.price)

  console.log(product)

 
 
  return (
    <div>
      <BreadCrum {...product}/>
      <ProductDisplay {...product} />
      <DescriptionBox/>
      <RelateProduct/>
  
    </div>
  )
}

export default Product
