import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import DrawerNavigation from './drawerNavigation';
import CreateUserProfile from '../screens/CreateUserProfile';
import AppointmentDetails from '../screens/AppointmentDetails';
import UserUpdateProfile from '../screens/UserUpdateProfile';
import UpdateDoctorProfile from '../screens/UpdateDoctorProfile';
import SignupScreen from '../screens/SignupScreen';
import FindDoctors from '../screens/findDoctor/FindDoctors';
import FindHealthConcern from '../screens/findHealthConcern';
import Splash from '../screens/Splash';
import SlotAppointmentbooking from '../screens/slotbooking/SlotAppointmentbooking';
import DoctorBookingProfile from '../screens/slotbooking/DoctorBookingProfile';
import DetailsDoctorSlots from '../screens/slotbooking/DetailsDoctorSlots';
import BookClinicAppointment from '../screens/slotbooking/BookClinicAppointment';
import Taskpage from '../screens/Taskpage';
import ClinicVisitSlots from '../screens/slotbooking/ClinicVisitSlots';
import OTPScreen from '../screens/Otp';
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen}   options={{ headerShown: false }}/>
             <Stack.Screen name="UserUpdateProfile" component={UserUpdateProfile}   options={{ headerShown: false }}/>
             <Stack.Screen name="HomeScreen" component={HomeScreen}   options={{ headerShown: false }}/>

          <Stack.Screen name="OtpScreen" component={OTPScreen}   options={{ headerShown: false }}/>
      <Stack.Screen name="signup" component={SignupScreen}   options={{ headerShown: false }}/>
            <Stack.Screen name="BookClinicappointment" component={BookClinicAppointment}   options={{ headerShown: false }}/>
       <Stack.Screen name="ClinicVisitSlots" component={ClinicVisitSlots}   options={{ headerShown: false }}/>
        <Stack.Screen name="taskpage" component={Taskpage}   options={{ headerShown: false }}/>
      <Stack.Screen name="DetailsDoctorSlots" component={DetailsDoctorSlots}   options={{ headerShown: false }}/>
       <Stack.Screen name="DoctorBookingProfile" component={DoctorBookingProfile}   options={{ headerShown: false }}/>
      <Stack.Screen name="slotbooking" component={SlotAppointmentbooking}   options={{ headerShown: false }}/>
      <Stack.Screen name="splash" component={Splash}   options={{ headerShown: false }}/>
       <Stack.Screen name="onboarding" component={OnboardingScreen}   options={{ headerShown: false }}/>
       <Stack.Screen name="findHealthConcern" component={FindHealthConcern}   options={{ headerShown: false }}/>
      <Stack.Screen name="FindDoctors" component={FindDoctors}   options={{ headerShown: false }}/>
    <Stack.Screen name="drawer" component={DrawerNavigation}   options={{ headerShown: false }}/>
    <Stack.Screen name="UpdateDoctorProfile" component={UpdateDoctorProfile}   options={{ headerShown: false }}/>
    <Stack.Screen name="DetailsScreen" component={DetailsScreen}   options={{ headerShown: false }}/>
    <Stack.Screen name="CreateUserProfile" component={CreateUserProfile}   options={{ headerShown: false }}/>
    <Stack.Screen name="AppointmentDetails" component={AppointmentDetails}   options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

