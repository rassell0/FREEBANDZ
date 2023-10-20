import React, { useEffect, useState } from 'react'
import { View, Text,Image, FlatList,TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import ProductPreview from './ProductPreview';
import { useSelector } from 'react-redux';
import {Ionicons} from "@expo/vector-icons"
import CartContainer from './CartContainer';
import CartBadge from './CartBadge';

const OneBigParty = ({navigation}) => {

    const [products,setProducts] = useState([])
    const [modal,setModal] = useState(false)
    const allProducts = useSelector(state => state.products.products)
    const cart = useSelector(state => state.cart.length)

    function getProducts(){
      
const partyCollection = []

      for(let i = 0; i < allProducts.length; i++){
        if(allProducts[i].catalog === "ONE BIG PARTY"){
partyCollection.push(allProducts[i])
        }
      }  
       setProducts(partyCollection)
    }
    
    useEffect(()=>{
      
    getProducts()
    },[]) 

    function toggleCart(){
      setModal(state =>!state)
    }



    function header(){ 
      return<View style={[tw`flex-row justify-between items-center border-b border-white  p-4 pt-10`]}>
{modal && <CartContainer toggleCart={toggleCart}/>}

      <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
         <Ionicons name='menu-outline' color={"white"} size={30}/>
      </TouchableOpacity>
      <Image style={[tw`mt-5`,{width:100 , height:100,opacity:2}]}  source={{uri:"https://shop.freebandz.com/cdn/shop/t/42/assets/imgpsh_fullsize_anim_100x100.gif?v=167518528897580872701616389601"}}/>
      <View  style={tw`flex-row justify-between`}>
      <TouchableOpacity onPress={toggleCart}>
         <Ionicons name='cart-outline' color={"white"} size={30}/>
         
      </TouchableOpacity>
    
      </View>
      {cart !== 0 && <CartBadge mt={18} qty={cart}/>}
      </View>
      }




function render({item}){
    return <ProductPreview checkout={toggleCart} data={item}/>
}



  return (
    <View style={tw`flex-1 bg-black `}> 
    <View style={[tw`flex-row justify-between items-center border-b border-white  p-4 pt-11`]}>
{modal && <CartContainer toggleCart={toggleCart}/>}

      <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
         <Ionicons name='menu-outline' color={"white"} size={30}/>
      </TouchableOpacity>
      <Image style={[tw``,{width:100 , height:100,}]}  source={{uri:"https://shop.freebandz.com/cdn/shop/t/42/assets/imgpsh_fullsize_anim_100x100.gif?v=167518528897580872701616389601"}}/>
      <View  style={tw`flex-row justify-between`}>
      <TouchableOpacity onPress={toggleCart}>
         <Ionicons name='cart-outline' color={"white"} size={30}/>
         
      </TouchableOpacity>
    
      </View>
      {cart !== 0 && <CartBadge mt={16} qty={cart}/>}
      </View>
  
    <FlatList data={products} renderItem={render}/>
    </View>
  )
}

export default OneBigParty
