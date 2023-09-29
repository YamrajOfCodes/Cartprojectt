import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../Slices/ProductSlice';
import Card from './Card';
import '../Styling/style.css'

function Products() {

    const cart=useSelector(store => store.productReducer.products);

    const dispatch=useDispatch();


    async function fetchdata(){
        const response=await fetch('https://fakestoreapi.com/products');
        const jsonData=await response.json();
        dispatch(loadCart(jsonData));
    }



useEffect(()=>{
    fetchdata();
},[]);




  return (
    <div className='grid'>
        {
            cart.map((products)=>{
                return <Card products={products}/>
            })
        }
    </div>
  )
}

export default Products