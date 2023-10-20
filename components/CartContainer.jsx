import { View, Text, Modal ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import {Ionicons} from "@expo/vector-icons"
import EmptyCartScreen from './EmptyCartScreen'
import CartScreen from './CartScreen'
const CartContainer = ({toggleCart}) => {

const cart = useSelector(state => state.cart)
console.log(cart)
  return (
    <Modal animationType="slide">
       
        {cart.length === 0 ?<EmptyCartScreen toggleCart={toggleCart}/> : <CartScreen toggleCart={toggleCart}/>}
        
    </Modal>
  )
}

export default CartContainer