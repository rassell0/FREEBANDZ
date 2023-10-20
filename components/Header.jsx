import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { useSelector } from 'react-redux';
import CartBadge from './CartBadge';
const Header = ({uri,cart,menu}) => {

  return (
    <View style={tw`flex-row justify-between items-center   p-4 pt-10`}>
      <TouchableOpacity>
         <Ionicons name='menu-outline' color={"white"} size={30}/>
      </TouchableOpacity>
     
      <Image style={[tw`mt-5`,{width:100 , height:100}]}  source={{uri}}/>
      <View  style={tw`flex-row justify-between`}>
      <TouchableOpacity>
         <Ionicons name='cart-outline' color={"white"} size={30}/>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Header