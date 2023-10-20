import { View, Text,Modal,Dimensions ,Image, Alert, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { add2Cart } from '../redux/cart'
import {Ionicons}  from "@expo/vector-icons"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import CartContainer from './CartContainer'
const ProductModal = ({data,toggleModal,checkout}) => {
    const height = Dimensions.get("window").height *.4
    const width = Dimensions.get("window").width
    const {price,name,uri,description,material,color} = data



const [img,setImg] = useState(0)
const [size,setSize] = useState("S")

const dispatch = useDispatch()
const cart = useSelector(state => state.cart)
const subImg = uri.map((uri,i)=>{
let border;
if(i === img){
    border = "border border-white"
}
function setSubImg(){
    setImg(i)
}
return <TouchableOpacity key={i} onPress={setSubImg}>
    <Image   source={{uri}} style={[tw`${border}`,{width:width *.3,height:height *.3}]}/>
</TouchableOpacity> 
})

function addToCart(){
    Alert.alert('Sensational',"",  [
        {
          text: 'Continue shopping',
          onPress: () => toggleModal(),
        },
        {
          text: 'Checkout',
          onPress: () => checkout(),
          
        },
       
      ]);
dispatch(add2Cart({price,name,uri,size,qty:1}))
}

const sizes = ["S","M","L","XL","2XL"]

const sizeBtns = sizes.map((v,i)=>{
  

function selectSize(){
  setSize(v)
}



return <TouchableOpacity onPress={selectSize} key={i} style={[tw`w-8 h-8 mx-2 items-center justify-center  border `,{borderColor:size===v ? "white" : "black"}]}>
 <Text style={[tw`text-white font-bold mt-2`]}>{v}</Text>
</TouchableOpacity>
})


  return (
    <Modal animationType="fade">
    <View style={tw`flex-1 bg-black pt-15 `}>
 <ScrollView>
 <Image source={{uri:uri[img]}} style={[tw``,{width,height}]}/>
<View style={tw`flex-row justify-center my-4`}>
{subImg}
</View>
<View style={tw`m-4`}>
    <Text style={tw`text-white font-bold`}>{name}</Text>
      <Text style={tw`text-white font-bold mt-2`}>${price}.00</Text>
      <View style={tw`flex-row `}>
         <Text> {sizeBtns}</Text>
      </View>
     
      <Text style={tw`text-white font-bold mt-2`}>ITEM IS IN STOCK AND SHIPS WITHIN 5-7 BUSINESS DAYS</Text>
      <Text style={tw`text-white font-bold mt-2`}>{description}</Text>
      <Text style={tw`text-white font-bold mt-2`}>{material}</Text>
      <Text style={tw`text-white font-bold mt-2`}>{color}</Text>
</View>
<View style={tw`flex-row items-center justify-between`}>
    <View>
        <Text>ascc</Text>
    </View>
    <TouchableOpacity onPress={addToCart}>
        <Text style={tw`text-white text-xl `}> Add To Cart</Text>
    </TouchableOpacity>
<TouchableOpacity onPress={toggleModal} >
            <Ionicons name='close'  color={"white"} size={40}/>
        </TouchableOpacity>
</View>
 </ScrollView>


    </View>
    </Modal>
  )
}

export default ProductModal