import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './navigation/authStack';
import {Provider} from 'react-redux';
import store from './reduxStore/reducers';
import NavigationHandler from './navigation/navigationHandler';
const Stack = createStackNavigator();
// <Stack.Screen name="Home" component={DrawerNavigation}   options={{ headerShown: false }}/>
export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
     <NavigationHandler/>
  </NavigationContainer>
  </Provider>
  )
}