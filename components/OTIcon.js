import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import { color } from '@rneui/themed/dist/config';
export default function OTIcon({name,color,size,style}) {
  return (
    <MaterialIcons 
    name={name}
     size={size}
     color={color} 
     style={style}
     />
  )
}