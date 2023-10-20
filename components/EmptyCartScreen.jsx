import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import {Ionicons} from "@expo/vector-icons"
const EmptyCartScreen = ({toggleCart}) => {
  return (
    <View style={tw`flex-1 bg-black`}>
            <View style={tw`pt-20 flex-1 items-center  pb-50 `}>
        <Image style={[tw`mt-5`,{width:200 , height:80}]}  source={{uri:"https://futureofficial.shop/cdn/shop/files/pluto-logo_807e8afb-ebb2-4910-9fba-506fe6a91388_360x.png?v=1675394605"}}/>
        </View>

        <View style={tw`flex-6 items-center `}>
        
<Text style={tw`text-white font-bold text-2xl`}>CART</Text>
<Text style={tw`text-white my-5`}>Your cart is currently empty</Text>
<TouchableOpacity onPress={toggleCart} style={tw`bg-white flex-row p-4 justify-center items-center rounded-md`}>
    <Text style={tw`text-lg`}>CONTINUE SHOPPING</Text>
    <Ionicons size={25} name='arrow-forward'/>
</TouchableOpacity>
        </View>
    </View>
  )
}

export default EmptyCartScreen