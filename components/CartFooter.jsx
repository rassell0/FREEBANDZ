import { View, Text,TouchableOpacity, Pressable,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import {Ionicons} from "@expo/vector-icons"
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/cart'
import { CardField, useStripe } from '@stripe/stripe-react-native';
const CartFooter = () => {
  const {initPaymentSheet,presentPaymentSheet} = useStripe()
const cart = useSelector(state => state.cart)
 console.log(cart)
const dispatch = useDispatch()

const [checked,setChecked] = useState(false)
const [price,setPrice] = useState(0)
function toggleCheckmark(){
  setChecked(state => !state) 
}

function clear(){
  dispatch(clearCart([])) 
}

const fetchPaymentSheetParams = async () => {
  const response = await fetch("http://192.168.1.71:4001/payment-sheet", {
    method: 'POST',
    body:JSON.stringify({ 
      amount:Math.floor(subtotal * 100),
     
     
  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { paymentIntent, ephemeralKey, customer,publishableKey} = await response.json();
 

  

  return {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey
  };
};

const initializePaymentSheet = async () => {
  const {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey, 
  } = await fetchPaymentSheetParams();

  const { error } = await initPaymentSheet({
    merchantDisplayName: "Example, Inc.",
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey, 
    paymentIntentClientSecret: paymentIntent,
    // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
    //methods that complete payment after a delay, like SEPA Debit and Sofort.
    allowsDelayedPaymentMethods: false,
    defaultBillingDetails: { 
      name: 'Jane Doe',  
    }
  }); 
  if (!error) { 
     
  }
};
  
const openPaymentSheet = async () => {
  if(checked === false){
    Alert.alert('Oops',"you must agree with the terms and conditions");
    return
  }

  const { error } = await presentPaymentSheet();
  const idk = new Date()
  const date = idk.toString()
  
  if (error) { 
   
   // initializePaymentSheet();
   
  } else {
     clear()
    Alert.alert('Success', 'Your order is confirmed and ready for pickup!');

    return
    const request = await fetch("http://192.168.1.71:4000/complete",{
    method:"POST",
    body:JSON.stringify({
      order:cart,
      user_id:account._id,
      total_amount:subtotal,
      order_date:date

    }),
    headers:{
      "Content-Type":"application/json"
    }
  })
  dispatch(clearCart())
  }
};
let subtotal = 0;
useEffect(()=>{
  
  for(let i = 0; i < cart.length; i++){
subtotal += Number(cart[i].price * cart[i].qty)
}
setPrice(subtotal)
  initializePaymentSheet();
},[cart])

  return (
    <View>
        <View style={tw`flex-row items-center mt-10 justify-center`}>
             <Text style={tw`text-white text-lg `}>Subtotal</Text>
             <Text style={tw`text-white text-lg ml-2 `}>${price}.00 USD</Text>
        </View>
        <View style={tw` items-center  justify-center`}>
            <Text style={tw`text-white  mt-2`}>Taxes and shipping calculated at checkout</Text>
        </View>
        <View style={tw`flex-row items-center justify-between `}>
            <Text style={tw`text-white font-bold text-center w-4/5 mt-2`}>
            I UNDERSTAND THAT ITEMS MAY TAKE UP TO 5-7 BUSINESS DAYS TO BE PROCESSED AND SHIPPED.
I AGREE TO PAY APPLICABLE DUTIES/TAXES UPON DELIVERY FOR INTERNATIONAL ORDERS.
I ACCEPT THE TERMS OF USE AND PRIVACY POLICY.
            </Text>
            <Pressable onPress={toggleCheckmark} style={tw`bg-white w-10 mr-1 items-center justify-center rounded-md h-10`}>
    {checked &&<Ionicons name='checkmark' size={30}/>}
            </Pressable>
        </View>
      <TouchableOpacity onPress={openPaymentSheet} style={tw`bg-white items-center p-4 rounded-md mx-4 mb-4 mt-7`}>
<Text style={tw`font-bold `}>Checkout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CartFooter