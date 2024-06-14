import { View, Text } from 'react-native'
import React from 'react'
import Headercom from '../components/headercom'
export default function Consultations({navigation}) {
  return (
    <View>
    <Headercom onPress={()=>navigation.goBack()}/>
    <View>
      <Text>consultations</Text>
    </View>
    </View>
  )
}