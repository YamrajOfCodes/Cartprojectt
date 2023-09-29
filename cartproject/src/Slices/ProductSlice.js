import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        products:[]
    },reducers:{
        loadCart:(state,action)=>{
            state.products=action.payload;
        }
    }
})

export default productSlice.reducer;
export const {loadCart}=productSlice.actions;