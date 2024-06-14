import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function OTButton({title,onPress,style}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={{alignItems:'center',color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
button: {
  backgroundColor: '#065E86', // Custom color
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginBottom: 10,
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:20,
  width:'90%',
  color:'white',
  fontWeight:'bold'
},
});