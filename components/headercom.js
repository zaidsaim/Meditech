import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
export default function Headercom({onPress,navigation,title}) {
  return (
    <View style={styles.header}>
 <MaterialIcons navigation={navigation} name="west" size={22} color='#065E86' onPress={onPress}/>

    <Text style={{color:'#065E86',fontSize:16,fontWeight:'bold'}}>{title}</Text>
    <Text style={{color:'grey'}}></Text>
    
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationText: {
      marginLeft: 5,
      fontSize: 12,
      color:'grey'
    },
  });