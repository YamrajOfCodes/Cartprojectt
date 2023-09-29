import React, { useState } from 'react'
import '../Styling/style.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar() {

  const cartt=useSelector(store => store.cartReducer.cart);

  let [counter,setcounter]=useState(0);
   setcounter=cartt.forEach(element => {
    return counter+=element.quantity;
  });

  return (
    <nav>

        <h2>Switchbuy</h2>
        <div className="rightLayout">
           <Link to={'/cart'}>Cart</Link>
            <p style={{fontSize:'1.2rem'}}>{counter}</p>
        </div>
    </nav>
  )
}

export default Navbar