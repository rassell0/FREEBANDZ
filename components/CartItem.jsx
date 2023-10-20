import { View, Text,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({item,index}) => {
    const {uri,name,price,size,qty} = item
const dispatch = useDispatch()
function updateQty(value){
  //setQty(value)

  const temp = {...item,qty:value}
  dispatch(updateQty({data:temp,index}))
}

  return (
    <View style={tw`mt-10 `}>
        <View style={tw`flex-row  `}>
          <Image source={{uri:uri[0]}} style={tw`w-25 h-25`}/>  
          <View style={tw`flex-row  w-72 justify-between`}>
             <View style={tw``}>
            <Text style={tw`text-white my-2 w-40 font-bold`}>{name}</Text>
            <Text style={tw`text-white my-2`}>size: {size}</Text>
            <Text style={tw`text-white my-2`}>Remove</Text>
            </View> 
          <View style={tw`items-end`}>
<Text style={tw`text-white mt-2 mb-6`}>${price * qty }.00</Text>
<View style={tw`flex-row items-center`} >
  <Text style={tw`text-white`}>QTY</Text>  
  <View style={tw`border border-white w-10 h-10 justify-center items-center rounded-sm ml-4 text-white `}>
<Text style={tw`text-white`}>1</Text>
  </View>
 
</View>

          </View>
          </View>
         
        </View>
    
     <View>

     </View>
    </View>
  )
}

export default CartItem