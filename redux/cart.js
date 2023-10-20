import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
       add2Cart:(state,action)=>{
            state.push(action.payload)
       },
       clearCart:(state,action)=>{
state = action.payload
       },
       updateQty:(state,action)=>{
state.splice(action.payload.index,1,action.payload.data)
       }
    }
})


export default cartSlice.reducer

export const { add2Cart,clearCart } = cartSlice.actions;
