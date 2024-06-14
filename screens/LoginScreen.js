// import { View, Text, Image, TextInput, TouchableOpacity ,StyleSheet, KeyboardAvoidingView} from 'react-native'
// import React ,{useRef,useState} from 'react'
// import  Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import Textinputcom from '../components/OTTextinput';
// import Button from '../components/OTButton';
// import { patientLogin,forgotPassword } from '../api/Api';
// import CheckBox from '@react-native-community/checkbox'; 
// import { useNavigation } from '@react-navigation/native';
// function App() {
//   return <Animated.View entering={FadeIn} exiting={FadeOut} />;
// }

// const handleGoogleLogin = () => {
//   // Handle Google login logic here
// };

// const handleFacebookLogin = () => {
//   // Handle Facebook login logic here
// };
// //<Image className='h-full w-full absolute' source={require('../assets/background.png')}/>
// export default function LoginScreen() {

//   const navigation =  useNavigation()

//   const refRBSheet = useRef();
//   const [sheetType, setSheetType] = useState(null);
//   const [newpassword,setNewpassword]=useState()
//   const [renewpassword,setRenewpassword]=useState()
//   const [isChecked, setIsChecked] = useState(false);

//  const [gmail,setGmail]=useState()
//  const [password,setPassword]=useState()
//  const [phone,setPhone]=useState()
//  const [email,setEmail]=useState()
//  const [confirmPassword,setConfirmPassword]=useState()
//  const [phoneOrEmail,setPhoneOrEmail]=useState()


//  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to store OTP digits
//  const otpInputs = useRef([]);

//  // Function to handle OTP input
//  const handleOTPInput = (index, value) => {
//    const updatedOTP = [...otp];
//    updatedOTP[index] = value;
//    setOTP(updatedOTP);

//    // Move focus to the next input field automatically
//    if (value && index < otp.length - 1) {
//      otpInputs.current[index + 1].focus();
//    }

//    // Check if all fields are filled
//    if (updatedOTP.every(digit => digit !== '')) {
//      const fullOtp = updatedOTP.join('');
//      handleOtpSubmit(fullOtp); // Call the API with the complete OTP
//    }
//  };

// //  const handleLogin = () => {
// //   if (isChecked) {
// //     // Phone & OTP
// //     patientLogin(phoneOrEmail, null, null);
// //   } else {
// //     if (phoneOrEmail.includes('@')) {
// //       // Email & Password
// //       patientLogin(null, phoneOrEmail, password);
// //     } else {
// //       // Phone & Password
// //       patientLogin(phoneOrEmail, null, password);
// //     }
// //   }
// // };




//   const renderBottomSheetContent = () => {
//     switch (sheetType) {
//       case 'forgotPassword':
//         return (
//           <View style={{flex:1,justifyContent:'center'}}>
//             <Text style={{marginHorizontal:20,color:'white'}}>forget password</Text>
//              <Textinputcom
//     onChangeText={(password)=>setPassword(password)}
//     value={password}
//     placeholder='Enter your password'
//     placeholderTextColor={'grey'}
//   />
//       <Textinputcom
//     onChangeText={(confirmPassword)=>setConfirmPassword(confirmPassword)}
//     value={confirmPassword}
//     placeholder='Enter your confirmPassword'
//     placeholderTextColor={'grey'}
//   />
//           <TouchableOpacity style={styles.buttonStyle} onPress={()=>forgotPassword(password,confirmPassword)}>
//           <Text style={{color:'#065E86',fontWeight:'bold'}}>{title='continue'}</Text>
//         </TouchableOpacity>
//         </View>
//         );
//       case 'updatePassword':
//         return (
//           <View style={{flex:1,justifyContent:'center'}}>
//             <Text style={{marginHorizontal:20,color:'grey'}}>update password</Text>
//           <Textinputcom
//  onChangeText={(newpassword)=>setNewpassword(newpassword)}
//  value={newpassword}
//  placeholder='new password'
//  keyboardType={"letter"}
//  placeholderTextColor={'grey'}
// />
// <Textinputcom
//  onChangeText={(newpassword)=>setNewpassword(newpassword)}
//  value={newpassword}
//  placeholder='new password'
//  keyboardType={"letter"}
//  placeholderTextColor={'grey'}
// />
//        <TouchableOpacity style={styles.buttonStyle} onPress={console.log('clicked')}>
//        <Text style={{color:'white',fontWeight:'bold',color:'white'}}>{title='continue'}</Text>
//      </TouchableOpacity>
//      </View>
//         );
//       case 'resetPassword':
//         return (
//           <View style={{flex:1,justifyContent:'center'}}>
//             <Text style={{marginHorizontal:20,color:'grey'}}>reset password</Text>
//              <Textinputcom
//     onChangeText={(newpassword)=>setNewpassword(newpassword)}
//     value={newpassword}
//     placeholder='new password'
//     keyboardType={"letter"}
//     placeholderTextColor={'grey'}
//   />
//     <Textinputcom
//  onChangeText={(renewpassword)=>setRenewpassword(renewpassword)}
//  value={renewpassword}
//  placeholder='Re-enter New Password'
//  keyboardType={"letter"}
//  placeholderTextColor={'grey'}
// />
// <TouchableOpacity style={styles.buttonStyle} onPress={()=>console.log('clicked')}>
//       <Text style={{fontWeight:'bold',color:'white'}}>{title='continue'}</Text>
//     </TouchableOpacity>
//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   const openBottomSheet = (type) => {
//     setSheetType(type);
//     refRBSheet.current.open();
//   };

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
//               <>
//                 <Animated.View
//                   entering={FadeInDown.duration(1000).springify()}
//                   style={styles.inputWrapper}
//                 >
//                   <TextInput
//                     placeholder='Phone'
//                     onChangeText={(text) => setPhone(text)}
//                     value={phone}
//                     placeholderTextColor={'grey'}
//                     color='grey'
//                     style={styles.textInput}
//                   />
//                 </Animated.View>
//                 <Animated.View
//                     entering={FadeInDown.delay(200).duration(1000).springify()}
//                     style={styles.inputWrapper}
//                   >
//                     <TextInput
//                       placeholder='Password'
//                       onChangeText={(text) => setPassword(text)}
//                       value={password}
//                       placeholderTextColor={'grey'}
//                       color='grey'
//                       secureTextEntry
//                       style={styles.textInput}
//                     />
//                   </Animated.View>
//                 {/* {!isChecked && (
//                   <Animated.View
//                     entering={FadeInDown.delay(200).duration(1000).springify()}
//                     style={styles.inputWrapper}
//                   >
//                     <TextInput
//                       placeholder='Password'
//                       onChangeText={(text) => setPassword(text)}
//                       value={password}
//                       placeholderTextColor={'grey'}
//                       color='grey'
//                       secureTextEntry
//                       style={styles.textInput}
//                     />
//                   </Animated.View>
//                 )} */}
//               </>
              
//               <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
//                 <CheckBox
//                   style={styles.checkbox}
//                   value={isChecked}
//                   onValueChange={() => setIsChecked(!isChecked)}
//                 />
//                 <Text style={styles.text}>Login with OTP instead of password</Text>
//               </View>
              
//               <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={{ width: '90%' }}>
                
//                   <TouchableOpacity style={styles.button} onPress={()=>patientLogin(phone,password,navigation)}>
//                     <Text className='text-xl font-bold text-white text-center'>Login</Text>
//                   </TouchableOpacity>
                
//               </Animated.View>
//      <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className='flex-row items-center'>
//      <Text style={{color:'grey'}}>dont't have an account?</Text>
//      <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
//      <Text style={{color:'#065E86',fontWeight:'bold'}}>Signup</Text>
//      </TouchableOpacity>
//      </Animated.View>
//      </View>
//      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
//         </View>
//      <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
//      <TouchableOpacity style={styles.card} onPress={handleGoogleLogin}>
//      <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className='h-[30] w-[35] ' source={require('../assets/google.png')}/>
//        <Text style={styles.buttonText}>Google</Text>
//      </TouchableOpacity>
//      <TouchableOpacity style={styles.card} onPress={handleFacebookLogin}>
//      <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className='h-[25] w-[25] ' source={require('../assets/faceboo.png')}/>
//        <Text style={styles.buttonTextFacebook}>Facebook</Text>
//      </TouchableOpacity>
//      </View>
//      <TouchableOpacity onPress={() => openBottomSheet('forgotPassword')} style={{alignItems:'center'}}>
//           <Text style={styles.bottomSheetOption}>Forgot Password</Text>
//         </TouchableOpacity>
        
     
// <View style={{}}>
//         <RBSheet ref={refRBSheet}
//          closeOnDragDown={true}
//          closeOnPressMask={true}
//          height={250}
//          customStyles={{
//            wrapper: {
//              backgroundColor: "transparent"
//            },
//            draggableIcon: {
//              backgroundColor: "#000",
//              closeOnDragDown:'true'
//            },
//            container:{borderTopRightRadius:30,borderTopLeftRadius:20,backgroundColor:'#065E86'},
//          }}>
//           {renderBottomSheetContent()}
//         </RBSheet>
//         </View>
//      </View>
//     </View>
//     </LinearGradient>
//     </KeyboardAvoidingView>
//   )
// }

// var styles = StyleSheet.create({
//   linearGradient: {
     
//   },
//   inputView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     margin:20
//   },
//   input: {
//     color: 'grey',
//     borderWidth: 1,
//     borderColor: 'gray',
//     width: 30,
//     height: 30,
//     marginHorizontal: 5,
//     textAlign: 'center',
//     fontSize: 20,
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
//   inputWrapper: {
//     backgroundColor: 'white',
//     width: '90%',
//     marginVertical: 20,
//   },
//   textInput: {
//     padding: 10,
//   },
//   buttonText: {
//     alignItems:'center',
//     justifyContent:'center',
//     marginHorizontal:10,
//     color:'#065E86',
//     backgroundColor:'white'
//   },
//   checkbox: {
//     flex: 1,
//   },
//   text: {
    

//     color:'#065E86'
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
//     // paddingHorizontal: 20,
//     borderRadius: 10,
//     // marginBottom: 10,
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
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import Textinputcom from '../components/OTTextinput';
import Button from '../components/OTButton';
import { patientLogin, forgotPassword } from '../api/Api';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

function App() {
  return <Animated.View entering={FadeIn} exiting={FadeOut} />;
}

const handleGoogleLogin = () => {
  // Handle Google login logic here
};

const handleFacebookLogin = () => {
  // Handle Facebook login logic here
};

export default function LoginScreen() {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [sheetType, setSheetType] = useState(null);
  const [newpassword, setNewpassword] = useState('');
  const [renewpassword, setRenewpassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to store OTP digits
  const otpInputs = useRef([]);

  // Function to handle OTP input
  const handleOTPInput = (index, value) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);

    // Move focus to the next input field automatically
    if (value && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }

    // Check if all fields are filled
    if (updatedOTP.every((digit) => digit !== '')) {
      const fullOtp = updatedOTP.join('');
      handleOtpSubmit(fullOtp); // Call the API with the complete OTP
    }
  };

  const renderBottomSheetContent = () => {
    switch (sheetType) {
      case 'forgotPassword':
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.bottomSheetText}>Forget password</Text>
            <Textinputcom
              onChangeText={(password) => setPassword(password)}
              value={password}
              placeholder="Enter your password"
              placeholderTextColor={'grey'}
            />
            <Textinputcom
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
              value={confirmPassword}
              placeholder="Enter your confirmPassword"
              placeholderTextColor={'grey'}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => forgotPassword(password, confirmPassword)}>
              <Text style={{ color: '#065E86', fontWeight: 'bold' }}>{'Continue'}</Text>
            </TouchableOpacity>
          </View>
        );
      case 'updatePassword':
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.bottomSheetText}>Update password</Text>
            <Textinputcom
              onChangeText={(newpassword) => setNewpassword(newpassword)}
              value={newpassword}
              placeholder="New password"
              keyboardType={'letter'}
              placeholderTextColor={'grey'}
            />
            <Textinputcom
              onChangeText={(newpassword) => setNewpassword(newpassword)}
              value={newpassword}
              placeholder="New password"
              keyboardType={'letter'}
              placeholderTextColor={'grey'}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={console.log('clicked')}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{'Continue'}</Text>
            </TouchableOpacity>
          </View>
        );
      case 'resetPassword':
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.bottomSheetText}>Reset password</Text>
            <Textinputcom
              onChangeText={(newpassword) => setNewpassword(newpassword)}
              value={newpassword}
              placeholder="New password"
              keyboardType={'letter'}
              placeholderTextColor={'grey'}
            />
            <Textinputcom
              onChangeText={(renewpassword) => setRenewpassword(renewpassword)}
              value={renewpassword}
              placeholder="Re-enter New Password"
              keyboardType={'letter'}
              placeholderTextColor={'grey'}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => console.log('clicked')}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{'Continue'}</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const openBottomSheet = (type) => {
    setSheetType(type);
    refRBSheet.current.open();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient colors={['#065E86', 'white']} style={styles.linearGradient}>
        <View style={styles.fullScreen}>
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
          <View style={styles.mainContent}>
            
            <View style={styles.inputsContainer}>
              <>
                <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Phone"
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                    placeholderTextColor={'grey'}
                    color="grey"
                    style={styles.textInput}
                  />
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  style={styles.inputWrapper}
                >
                  <TextInput
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholderTextColor={'grey'}
                    color="grey"
                    secureTextEntry
                    style={styles.textInput}
                  />
                </Animated.View>
              </>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={() => setIsChecked(!isChecked)}
                />
                <Text style={styles.checkboxText}>Login with OTP instead of password</Text>
              </View>
              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={{ width: '90%' ,marginTop:20}}>
                <TouchableOpacity style={styles.button} onPress={() => patientLogin(phone, password, navigation)}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.signupContainer}>
                <Text style={styles.greyText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                  <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.card} onPress={handleGoogleLogin}>
                <Animated.Image
                  entering={FadeInUp.delay(400).duration(1000).springify()}
                  style={styles.socialIcon}
                  source={require('../assets/google.png')}
                />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={handleFacebookLogin}>
                <Animated.Image
                  entering={FadeInUp.delay(400).duration(1000).springify()}
                  style={styles.socialIcon}
                  source={require('../assets/faceboo.png')}
                />
                <Text style={styles.socialButtonTextFacebook}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => openBottomSheet('forgotPassword')} style={styles.centerItems}>
              <Text style={styles.bottomSheetOption}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View>
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              height={250}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  closeOnDragDown: 'true',
                },
                container: {
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 20,
                  backgroundColor: '#065E86',
                },
              }}
            >
              {renderBottomSheetContent()}
            </RBSheet>
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
  fullScreen: {
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
  mainContent: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 200,
    paddingBottom: 10,
  },
  centerItems: {
    alignItems: 'center',
    marginBottom:20
  },
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 24,
  },
  inputsContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  inputWrapper: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 10,
  },
  textInput: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  checkbox: {
    flex: 1,
  },
  checkboxText: {
    color: '#065E86',
  },
  button: {
    backgroundColor: '#065E86',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20
  },
  greyText: {
    color: 'grey',
  },
  signupText: {
    color: '#065E86',
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#cadbd1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'grey',
  },
  socialIcon: {
    height: 30,
    width: 35,
  },
  socialButtonText: {
    marginHorizontal: 10,
    color: '#065E86',
    backgroundColor: 'white',
  },
  socialButtonTextFacebook: {
    marginHorizontal: 10,
    color: 'grey',
  },
  bottomSheetText: {
    marginHorizontal: 20,
    color: 'white',
  },
  bottomSheetOption: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#065E86',
    marginHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
