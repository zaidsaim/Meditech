import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import Button from '../components/OTButton'
import Headercom from '../components/headercom'
export default function MedicalRecords({navigation}) {
  return (
    <View style={{flex:1,}}>
    <Headercom onPress={()=>navigation.goBack()} title={'Medical report'}/>
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
       <Image style={{width:200,height:200}} source={{uri:'https://img.freepik.com/free-vector/illustrated-doctor-injecting-vaccine-patient_23-2148828856.jpg?w=740&t=st=1716196710~exp=1716197310~hmac=af2d745caa53ede9b6a1d037e23e6b2208ac26946ceae63fc94c9034faf67de5' }}/>
      <Text style={{color:'black',fontSize:12,marginVertical:10}}>Add a medical record</Text>
      <Text style={{color:'black',fontSize:12,marginBottom:100}}>A detailed health history helps a doctor diagnose</Text>
   
   <Button title={'Add a record'} />
    </View>
    </View>
  )
}

