import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const CartHeader = () => {
  return (
    <View>
       <View style={tw`pt-20  items-center  pb-20 `}>
        <Image style={[tw`mt-5`,{width:200 , height:80}]}  source={{uri:"https://futureofficial.shop/cdn/shop/files/pluto-logo_807e8afb-ebb2-4910-9fba-506fe6a91388_360x.png?v=1675394605"}}/>
        </View>

        <View style={tw`  items-center`}>
<Text style={tw`text-white font-bold text-2xl`}>CART</Text>
<Text style={tw`text-white my-5`}>Continue Shopping</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
<Text style={tw`text-white`}>PRODUCTS</Text>
<Text style={tw`text-white`}>PRICE</Text>
        </View>
    </View>
  )
}

export default CartHeader