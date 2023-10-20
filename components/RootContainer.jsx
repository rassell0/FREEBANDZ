import { View, Text,Dimensions, ImageBackground,Image } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import PlutoColletion from './PlutoCollection';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OneBigParty from './OneBigParty';
import { store } from '../redux/store';

import { StripeProvider } from '@stripe/stripe-react-native';

const RootContainer = () => {


const Drawer = createDrawerNavigator();


    const height = Dimensions.get("screen").height
    const width = Dimensions.get("screen").width
  return (
    <View style={tw`flex-1`}>
       <StripeProvider
    publishableKey={"pk_test_51MIBh1CstgMWqkBiKR9WZjR80OmdKKODKJi6QM4L0ZzmViN3Ft7StlIpnqlRPlfFzPduBDa72UOliDRC6QdjcKgF00ZIgZXl9L"}
    merchantIdentifier="merchant.identifier" // required for Apple Pay
    urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  >

<Provider store={store}>


  
       <NavigationContainer>
    <Drawer.Navigator screenOptions={{
     drawerStyle:{
      backgroundColor:"black",
     },
     drawerLabelStyle:{
      color:"white"
     },
     headerShown:false
    }} >
     <Drawer.Screen name='PLUTO' options={{
         headerTitle:()=><Image style={{width:100 , height:40}} source={{uri:"https://futureofficial.shop/cdn/shop/files/pluto-logo_807e8afb-ebb2-4910-9fba-506fe6a91388_360x.png?v=1675394605"}}/>,
         headerStyle:{
            backgroundColor:"black",
            
         },
         
     }} component={PlutoColletion}/>

     <Drawer.Screen name='ONE BIG PARTY' options={{
       headerTitle:()=><Image style={{width:100 , height:40}} source={{uri:"https://shop.freebandz.com/cdn/shop/t/42/assets/imgpsh_fullsize_anim_100x100.gif?v=167518528897580872701616389601"}}/>,
       headerStyle:{
          backgroundColor:"black"
       }
     }} component={OneBigParty}/>
    

    </Drawer.Navigator>
      </NavigationContainer> 
      </Provider>

  </StripeProvider>
    
    </View>
    
  )
}

export default RootContainer 