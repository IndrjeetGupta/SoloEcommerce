import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";

function CartItem() {
    const {data,cartItem,addToCart,removeToCart} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <div className='cartItem_fromat_main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr />
        {data.map((e) =>{
            if(cartItem[e.id] > 0){
                return <div>
            <div className='cartItem_fromat'>
            <img src={e.image} alt="" className='cartIcon_product_icon' />
            <p>{e.title}</p>
            <p>{e.price}</p>
            <button className='cartItem_quantity'>{cartItem[e.id]}</button>
            <p>{e.price*cartItem[e.id]}</p>
            <RxCross2 onClick={() =>removeToCart(e.id)}/>

        </div>

                </div>
        
            }
            return null
        })}

        <div className='cardItem_down'>

            <div className='cardItem_total'>
                <h1>Card Total</h1>

                <div>
                    <div className='cardItem_total_item'>
                        <p>SubTotal</p>
                        <p>${0}</p>

                    </div>
                    <hr />

                    <div className='cardItem_total_item'>
                        <p>Sheeping Free</p>
                        <p>Free</p>

                    </div>
                    <hr />

                    <div className='cardItem_total_item'>
                        <p>Total</p>
                        <p>${0}</p>

                    </div>
                    <hr />
                </div>
                <button>Process To Checkout</button>

            </div>
            <div className="cartItem_promocode">
                
            </div>

        </div>
  
      
    </div>
  )
}

export default CartItem
