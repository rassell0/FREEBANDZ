import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'

const CartBadge = ({qty,mt}) => {





  return (
    <View style={tw`bg-red-500 rounded-full justify-center absolute w-5 h-5 items-center right-1 top-${mt}`}>
    <Text style={tw`text-white`}>{qty}</Text>
   </View>
  )
}

export default CartBadge