import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'

export default function OTTextinputcom({placeholderTextColor,placeholder,value,onChangeText,keyboardType}) {
  return (
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    keyboardType={keyboardType}
    placeholderTextColor={placeholderTextColor}
    
  />
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: 'white',
    backgroundColor:'white',
    marginHorizontal:20,
    marginVertical:10,
    color:'grey'
    
      },
  });
  