import { View, Text, Modal ,Image, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import {Ionicons} from "@expo/vector-icons"
import EmptyCartScreen from './EmptyCartScreen'
import CartItem from './CartItem'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'

const CartScreen = ({toggleCart}) => {

const cart = useSelector(state => state.cart)

function render({item,index}){
 
return <CartItem item={item} index={index}/>
}





  return (
   
  <View style={tw`flex-1 bg-black `}>
           
           <FlatList data={cart} ListFooterComponent={CartFooter} ListHeaderComponent={CartHeader} renderItem={render}/>
       
        <TouchableOpacity style={tw`absolute right-5 top-15`} onPress={toggleCart} >
            <Ionicons name='close'   color={"white"} size={40}/>
        </TouchableOpacity>
        
    </View>
  

  )
}

export default CartScreen