import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Button from '../components/OTButton'
import Headercom from '../components/headercom'
export default function TestBooking({navigation}) {
  return (
    <View style={{flex:1,}}>
    <Headercom onPress={()=>navigation.goBack()} title={'Diagnostics Tests'}/>
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image style={{width:200,height:200}} source={{uri:'https://img.freepik.com/premium-vector/cartoon-clinic-chamber-with-doctors-nurses-caring-patients_177821-5108.jpg?w=826' }}/>
        <View style={{paddingVertical:50}}>
      <Text style={{color:'black',fontSize:14}}>        You have't booked any test yet</Text>
      <Text style={{color:'black',fontSize:14}}>Get started with your first health checkup</Text>
      </View>
      <Button title={'Book Now'} />
    </View>
    </View>
  )
}