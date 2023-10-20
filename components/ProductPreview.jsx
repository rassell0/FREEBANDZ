import { View, Text,Image,Dimensions,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import ProductModal from './ProductModal'
const ProductPreview = ({data,checkout}) => {

const [modal,setModal] = useState(false)
    const {price,name,uri} = data

    const height = Dimensions.get("window").height *.4
    const width = Dimensions.get("window").width

function toggleModal(){
    setModal(state => !state)
}

function checkedout(){
 setModal(state => !state)
checkout()
}
 
  return (
    <TouchableOpacity onPress={toggleModal} style={tw`items-center mt-14`}>
        {modal && <ProductModal checkout={checkedout} toggleModal={toggleModal} data={data}/>}
        <Image source={{uri:uri[0]}} style={[tw``,{width,height}]}/>
      <Text style={tw`text-white font-bold`}>{name}</Text>
      <Text style={tw`text-white font-bold mt-2`}>${price}.00</Text>
    </TouchableOpacity>
  )
}

export default ProductPreview 