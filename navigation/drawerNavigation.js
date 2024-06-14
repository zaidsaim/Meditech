import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from '../screens/HomeScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../components/CustomDrawer';

//import NotificationsScreen from '../screens/NotificationsScreen';
import MyDoctors from '../screens/MyDoctors';
import Consultations from '../screens/Consultations';
import CreateUserProfile from '../screens/CreateUserProfile';
import CreateDoctorProfile from '../screens/CreateDoctorProfile';
import Appointments from '../screens/Appointments';
import TestBooking from '../screens/TestBooking';
import MedicalRecords from '../screens/MedicalRecords';
import LoginScreen from '../screens/LoginScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: 'white',
      drawerActiveTintColor: '#065E86',
      drawerInactiveTintColor: 'white',
      headerBackground:'#065E86',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}>
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="home" size={22} color={color} />
        ),
      }}
    />
   
    <Drawer.Screen
      name="My Doctors"
      component={MyDoctors}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="medication" size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="User Profile"
      component={CreateUserProfile}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="person-add" size={22} color={color} />
        ),
      }}
    />
        <Drawer.Screen
      name="Doctor Profile"
      component={CreateDoctorProfile}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="group-add" size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Consultations"
      component={Consultations}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="settings-accessibility" size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Appoinments"
      component={Appointments}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="book-online" size={22} color={color} />
        ),
      }}
    />
     <Drawer.Screen
      name="Booking"
      component={TestBooking}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="bloodtype" size={22} color={color} />
        ),
      }}
    />
      <Drawer.Screen
      name="Medical Record"
      component={MedicalRecords}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="medical-information" size={22} color={color} />
        ),
      }}
    />
       {/* <Drawer.Screen
      name="Login"
      component={LoginScreen}
      options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name="person" size={22} color={color} />
        ),
      }}
    /> */}
  </Drawer.Navigator>

  )
}