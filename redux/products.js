import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:null
    },
    reducers:{
        setAllProducts:(state,action)=>{
            state.products = action.payload
        }
    }
})


export default productsSlice.reducer

export const { setAllProducts } = productsSlice.actions;
