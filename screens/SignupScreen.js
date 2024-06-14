// import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
// import React from 'react'
// import  Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';


// export default function SignupScreen({navigation}) {
//   return (
//     <KeyboardAvoidingView>
//     <View className='bg-white h-full w-full'>
//     <Image className='h-full w-full absolute' source={require('../assets/background.png')}/>
//      <View className='flex-row justify-around w-full absolute'>
//      <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[200] w-[90]' source={require('../assets/light.png')}/>
//      <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className='h-[160] w-[65]' source={require('../assets/light.png')}/>
//      </View>
//      <View className='h-full w-full flex justify-around pt-40 pb-10'>
//      <View className='flex items-center'>
//      <Animated.Text  entering={FadeInUp.delay(400).duration(1000)} className='text-white font-bold tracking-wider text-5xl my-10'>Signup
//      </Animated.Text>
//      </View>
  
//      <View className='flex items-center mx-4 space-y-4'>
//      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 rounded-2xl w-full p-1 h-[50]'>
//      <TextInput placeholder='Username' placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.duration(1000).springify()} className='bg-black/5 rounded-2xl w-full p-1 h-[50]'>
//      <TextInput placeholder='Email' placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 rounded-2xl w-full p-1 h-[50] mb-5'>
//      <TextInput placeholder='Password' placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
//      <TouchableOpacity className='bg-sky-400 w-full rounded-2xl mb-3 p-2.5'>
//      <Text className='text-xl font-bold text-white text-center'>Signup</Text>
//      </TouchableOpacity>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className='flex-row items-center'>
//      <Text style={{color:'grey'}}>dont't have an account?</Text>
//      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
//      <Text className='text-sky-600'>Login</Text>
//      </TouchableOpacity>
//      </Animated.View>
//      </View>
//      </View>
//     </View>
//     </KeyboardAvoidingView>
//   )
// }



// import { View, Text, Image, TextInput, TouchableOpacity ,StyleSheet, KeyboardAvoidingView} from 'react-native'
// import React ,{useRef,useState} from 'react'
// import  Animated, { FadeIn, FadeInDown, FadeInUp, Alert } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import Textinputcom from '../components/OTTextinput';
// import Button from '../components/OTButton';
// import { signupPatient } from '../reduxStore/actions/authAction';
// import { useDispatch } from 'react-redux';
// import { handleSignup} from '../api/Api';
// import { useNavigation } from '@react-navigation/native';
// //<Image className='h-full w-full absolute' source={require('../assets/background.png')}/>
// export default function SignupScreen() {
//  const [firstName,setFirstName]=useState()
//  const [lastName,setLastName]=useState()
//  const [phone,setPhone]=useState()
//  const [password,setPassword]=useState()

//  const navigation =useNavigation()
//  const dispatch =useDispatch()

//   return (
//     <KeyboardAvoidingView style={{flex:1}}>
//     <LinearGradient colors={['#065E86', 'white']} style={styles.linearGradient}>
//     <View className='h-full w-full'>
    
//      <View className='flex-row justify-around w-full absolute'>
//      <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[200] w-[90]' source={require('../assets/light.png')}/>
//      <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className='h-[160] w-[65]' source={require('../assets/light.png')}/>
//      </View>
//      <View className='h-full w-full flex justify-around pt-40 pb-10'>
//      <View className='flex items-center'>
//      <Animated.Text  entering={FadeInUp.delay(400).duration(1000)} className='text-black font-bold tracking-wider text-2xl'>
//      </Animated.Text>
//      </View>
//      <View className='flex items-center mx-4 space-y-4'>
//      <Animated.View entering={FadeInDown.duration(1000).springify()} style={{backgroundColor:'white',width:'90%',borderRadius:5}}>
//      <TextInput placeholder='FirstName' onChangeText={(text)=>setFirstName(text)} value={firstName} placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={{backgroundColor:'white',width:'90%',borderRadius:5}}>
//      <TextInput placeholder='LastName' onChangeText={(text)=>setLastName(text)} value={lastName} placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={{backgroundColor:'white',width:'90%',borderRadius:5}}>
//      <TextInput placeholder='Phone' onChangeText={(text)=>setPhone(text)} value={phone} placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={{backgroundColor:'white',width:'90%',borderRadius:5}}>
//      <TextInput placeholder='Password' onChangeText={(text)=>setPassword(text)} value={password} placeholderTextColor={'grey'} color='grey'/>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={{width:'90%'}}>
//      <TouchableOpacity style={styles.button} onPress={()=>handleSignup(firstName,lastName,phone,password,navigation)}>
//      <Text className='text-xl font-bold text-white text-center'>Signup</Text>
//      </TouchableOpacity>
//      </Animated.View>
//      <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className='flex-row items-center'>
//      <Text style={{color:'grey'}}>dont't have an account?</Text>
//      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
//      <Text style={{color:'#065E86',fontWeight:'bold'}}>Login</Text>
//      </TouchableOpacity>
//      </Animated.View>
//      </View>
//      </View>
//     </View>
//     </LinearGradient>
//     </KeyboardAvoidingView>
//   )
// }

// var styles = StyleSheet.create({
//   linearGradient: {
     
//   },
 
//   card: {
//   padding:10,
//    backgroundColor:'white',
//     borderRadius: 10,
//     flexDirection:'row',
//     shadowColor: '#cadbd1',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 1.0,
//     //elevation: 5,
//     justifyContent:'space-evenly',
//     alignItems:'center',borderColor:'grey',
    
//   },
//   buttonText: {
//     alignItems:'center',
//     justifyContent:'center',
//     marginHorizontal:10,
//     color:'grey'
//   },
//   buttonTextFacebook: {
//     alignItems:'center',
//     justifyContent:'center',
//     marginHorizontal:10,
//     color:'grey'
//   },
//   button: {
//     backgroundColor: '#065E86', // Custom color
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   linearGradient: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomSheetContent: {
//     padding: 16,
    
//   },
//   bottomSheetText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   bottomSheetOption: {
//     marginTop: 20,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#065E86',
//     marginHorizontal:10,
//     fontWeight:'bold'
//   },
//   buttonStyle: {
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 5,
//     alignItems:'center',
//     marginHorizontal:20,
//     marginVertical:20
//   },
// });



import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useRef, useState } from 'react';
import Animated, { FadeIn, FadeInDown, FadeInUp, Alert } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import Textinputcom from '../components/OTTextinput';
import Button from '../components/OTButton';
import { signupPatient } from '../reduxStore/actions/authAction';
import { useDispatch } from 'react-redux';
import { handleSignup } from '../api/Api';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient colors={['#065E86', 'white']} style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
              style={styles.imageLarge}
              source={require('../assets/light.png')}
            />
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              style={styles.imageSmall}
              source={require('../assets/light.png')}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.form}>
              <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputContainer}>
                <TextInput
                  placeholder='First Name'
                  onChangeText={(text) => setFirstName(text)}
                  value={firstName}
                  placeholderTextColor={'grey'}
                  color='grey'
                  style={styles.textInput}
                />
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputContainer}>
                <TextInput
                  placeholder='Last Name'
                  onChangeText={(text) => setLastName(text)}
                  value={lastName}
                  placeholderTextColor={'grey'}
                  color='grey'
                  style={styles.textInput}
                />
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputContainer}>
                <TextInput
                  placeholder='Phone'
                  onChangeText={(text) => setPhone(text)}
                  value={phone}
                  placeholderTextColor={'grey'}
                  color='grey'
                  style={styles.textInput}
                />
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputContainer}>
                <TextInput
                  placeholder='Password'
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  placeholderTextColor={'grey'}
                  color='grey'
                  style={styles.textInput}
                />
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleSignup(firstName, lastName, phone, password, navigation)}>
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.loginContainer}>
                <Text style={styles.greyText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
  },
  imageLarge: {
    height: 200,
    width: 90,
  },
  imageSmall: {
    height: 160,
    width: 65,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 100,
    paddingBottom: 10,
  },
  centerItems: {
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 24,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 5,
    marginVertical: 10,
  },
  textInput: {
    padding: 10,
  },
  buttonContainer: {
    width: '90%',
  },
  button: {
    backgroundColor: '#065E86',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop:30
    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20
  },
  greyText: {
    color: 'grey',
  },
  loginText: {
    color: '#065E86',
    fontWeight: 'bold',
  },
});
