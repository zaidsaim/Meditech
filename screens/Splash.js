import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
    }, 5000);
      navigation.navigate('onboarding');

    }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#065E86', justifyContent: 'center', alignItems: 'center' ,}}>
      <Image source={require('../assets/splash.jpg')} style={{ height: 200, width: 200,borderRadius:500 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 29, color: 'white' }}>Healthcare</Text>
    </View>
  );
}
