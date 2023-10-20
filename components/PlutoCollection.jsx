import { View, Text,Image, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useDispatch,} from 'react-redux';
import { setAllProducts } from '../redux/products';
import ProductPreview from './ProductPreview';
import {Ionicons} from "@expo/vector-icons"
import { useSelector } from 'react-redux';
import CartContainer from './CartContainer';
import CartBadge from './CartBadge';
const PlutoColletion = ({navigation}) => {
  const cart = useSelector(state => state.cart.length)
    const [products,setProducts] = useState([])
    const [modal,setModal] = useState(false)
const dispatch = useDispatch()
const allProducts = useSelector(state => state.products.products)
async function getProducts2(){
    const fetchedProducts = []
    const pluto = []
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
 fetchedProducts.push(doc.data())
 if(doc.data().catalog === "PLUTO"){
pluto.push(doc.data())
 }
});
dispatch(setAllProducts(fetchedProducts))
setProducts(pluto)
}

function toggleCart(){
  setModal(state =>!state)
}

function header(){ 
  return<View style={tw`flex-row justify-between items-center   p-4 pt-10`}>
    {modal && <CartContainer toggleCart={toggleCart}/>}
  <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
     <Ionicons name='menu-outline' color={"white"} size={30}/>
  </TouchableOpacity>
  <Image style={[tw`mt-5`,{width:200 , height:80}]}  source={{uri:"https://futureofficial.shop/cdn/shop/files/pluto-logo_807e8afb-ebb2-4910-9fba-506fe6a91388_360x.png?v=1675394605"}}/>
  <View  style={tw`flex-row justify-between`}>
  <TouchableOpacity onPress={toggleCart}>
     <Ionicons name='cart-outline' color={"white"} size={30}/>
  </TouchableOpacity>
  </View>
  {cart !== 0 && <CartBadge mt={15} qty={cart}/>}
  </View>
  }
  function getProducts(){
if(allProducts === null){
  getProducts2()
}else{
  const plutoCollection = []

      for(let i = 0; i < allProducts.length; i++){
        if(allProducts[i].catalog === "PLUTO"){
plutoCollection.push(allProducts[i])
        }
      }  
       setProducts(plutoCollection)
}
    }
    


useEffect(()=>{
 
getProducts()
},[]) 
/**
 * 
 *       "catalog": "ONE BIG PARTY", "color": "High Quality Screen Printed Graphics With Metallic Gold Details.", "description": "Official Future One Big Party Tour Merchandise!", "material": "100% 14oz Heavy Weight Cotton.", "name": "ONE BIG PARTY CONFETTI EAGLE HOODIE", "price": 100, "sale": 70, "uri": ["https://firebasestorage.googleapis.com/v0/b/freebandz-74b40.appspot.com/o/Screen_Shot_2023-09-16_at_3.28.22_AM-removebg-preview.png?alt=media&token=029c73a8-9862-43e2-82c1-98419c3cf1c3", "https://firebasestorage.googleapis.com/v0/b/freebandz-74b40.appspot.com/o/Screen_Shot_2023-09-16_at_3.28.05_AM-removebg-preview.png?alt=media&token=dd58114a-c125-4b43-a13f-6e66ad2a5a03"], "zip": true}
 */


function render({item}){
    return <ProductPreview checkout={toggleCart} data={item}/>
}



  return (
    <View style={tw`flex-1 bg-black  `}> 
   <View style={tw`flex-row justify-between items-center border-b border-white  p-4 pt-10`}>
    {modal && <CartContainer toggleCart={toggleCart}/>}
  <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
     <Ionicons name='menu-outline' color={"white"} size={30}/>
  </TouchableOpacity>
  <Image style={[tw`mt-5`,{width:200 , height:80}]}  source={{uri:"https://futureofficial.shop/cdn/shop/files/pluto-logo_807e8afb-ebb2-4910-9fba-506fe6a91388_360x.png?v=1675394605"}}/>
  <View  style={tw`flex-row justify-between`}>
  <TouchableOpacity onPress={toggleCart}>
     <Ionicons name='cart-outline' color={"white"} size={30}/>
  </TouchableOpacity>
  </View>
  {cart !== 0 && <CartBadge mt={15} qty={cart}/>}
  </View>
    
    <FlatList data={products}  renderItem={render} />
    </View>
  )
}

export default PlutoColletion  