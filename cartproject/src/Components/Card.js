import React, { useState } from 'react'
import '../Styling/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../Slices/ProductSlice';
import { addtocart, removefromcart } from '../Slices/CartSlice';

function Card({products}) {

 const dispatch=useDispatch();   

  const cart=useSelector(store => store.cartReducer.cart);

  const curItem=cart.find((element)=>{
    return element.id==products.id;
  })

  const counter=curItem? curItem.quantity:0;


  return (
    <div className='card'>
        <img src={products.image} alt="" />
        <div className="display">
            <button onClick={
              ()=>{
                dispatch(addtocart({
                  product:products.id,
                  img:products.image,
                  price:products.price
                }))
              }
            } >+</button>
            <p>{counter}</p>
            <button onClick={()=>{
              dispatch(removefromcart(products.id))
            }}>-</button>
        </div>
    </div>
  )
}

export default Card