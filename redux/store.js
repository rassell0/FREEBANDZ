import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import cart from './cart'
export const store = configureStore({
  reducer: {
    products,
    cart
  },
})