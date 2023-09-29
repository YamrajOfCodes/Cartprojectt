import React from 'react'
import { useSelector } from 'react-redux'
import '../Styling/style.css'

function Cart() {

 const carts=useSelector(store => store.cartReducer.cart);
 console.log(carts);

  return (
    <div className='cart-container'>{
        carts.map((elements)=>{
            return (
                <div className='cart'>
                <img src={elements.img} alt="" />
              <div className="flex">
              <p>Quantity: {elements.quantity}</p>
              <p>Price : {elements.price}</p>
              </div>
                </div>
                
                ) 
        })
        }</div>
  )
}

export default Cart