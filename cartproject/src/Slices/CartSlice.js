import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            const cartfind=state.cart.find(cart=>cart.id===action.payload.id)
         if(cartfind){
          cartfind.quantity+=1;
            return;
         }
         else{
            state.cart.push({
                quantity:1,
                id:action.payload.product,
                img:action.payload.img,
                price:action.payload.price
            })
         }
                
            },
            removefromcart:(state,action)=>{
                   const cartitem=state.cart.find(cart=> cart.id==action.payload);
                   if(cartitem)
                   {
                    cartitem.quantity-=1;
                    if(cartitem.quantity==0){
                       state.cart=state.cart.filter(cart=>cart.id!==action.payload);
                    }
                   }
            }
        }
    }

)

export default cartSlice.reducer;
export const {addtocart,removefromcart}=cartSlice.actions