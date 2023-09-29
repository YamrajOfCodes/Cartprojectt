import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slices/ProductSlice";
import CartSlice from "../Slices/CartSlice";

export default configureStore({
    reducer:{
        productReducer:ProductSlice,
        cartReducer:CartSlice
    }
})