
// import React, { useState, useRef } from 'react';
// import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
// import { handleOtpSubmit } from '../api/Api';

// const OTPScreen = (props) => {
//   const [otp, setOtp] = useState(); // Array to store OTP digits

//   // const {data} =props?.route.params.data
//   // console.log('datat=====check',JSON.stringify(data))
//   // console.log('otoscreen=====',otp)
//    const otpInputs = useRef([]);

//   // // Function to handle OTP input
//   const handleOTPInput = (index, value) => {
//     const updatedOTP = [...otp];
//     updatedOTP[index] = value;
//     setOtp(updatedOTP);

//     // Move focus to the next input field automatically
//     if (value && index < otp.length - 1) {
//       otpInputs.current[index + 1].focus();
//     }
//   };


import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { handleOtpSubmit } from '../api/Api';
import { useNavigation } from '@react-navigation/native';
const OTPScreen = (props) => {
  const [otp, setOtp] = useState(new Array(6).fill('')); // Initialize OTP array with 6 empty strings
const navigation=useNavigation()
  const otpInputs = useRef([]);

  // Function to handle OTP input
  const handleOTPInput = (index, value) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOtp(updatedOTP);

    // Move focus to the next input field automatically
    if (value && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  // Function to handle OTP submission
  const handleSubmit = () => {
    if (otp.every(digit => digit !== '')) {
      handleOtpSubmit(otp.join(''),navigation); // Call the API with the complete OTP
    } else {
      Alert.alert('Please fill in all OTP fields.');
    }
  };

  return (
    <View style={{ paddingTop: 20, marginHorizontal: 20 }}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ color: 'grey', fontSize: 18 }}>Enter OTP</Text>
      </View>
    
      <View style={styles.inputView}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleOTPInput(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpInputs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
        <Text style={{color:'white'}}>Submit Otp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 40,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'grey'
  },
  buttonView: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor:'#065E86',
    padding:10,
    alignItems:'center',
    marginTop:50
  },
});

export default OTPScreen;





//   // Function to handle OTP submission
//   const handleSubmit = () => {
//     if (otp.every(digit => digit !== '')) {
//       handleOtpSubmit(otp); // Call the API with the complete OTP
//     } else {
//       Alert.alert('Please fill in all OTP fields.');
//     }
//   };

//   return (
//     <View style={{ paddingTop: 20, marginHorizontal: 20 }}>
//       <View style={{ marginHorizontal: 20 }}>
//         <Text style={{ color: 'grey', fontSize: 18 }}>Enter OTP</Text>
//       </View>
    
// <View style={styles.inputView}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.input}
//             value={digit}
//             onChangeText={(text) => handleOTPInput(index, text)}
//             keyboardType="numeric"
//             maxLength={1}
//             ref={(ref) => (otpInputs.current[index] = ref)}
//           />
//         ))}
//       </View>
//       <View style={styles.buttonView}>
//         <Button title="Submit OTP" onPress={()=>handleSubmit()} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 50,
//   },
//   input: {
//     color: 'grey',
//     borderWidth: 1,
//     borderColor: 'gray',
//     width:'90%',
//     marginHorizontal: 5,
//     textAlign: 'center',
//     fontSize: 20,
//     color:'grey'
//   },
//   buttonView: {
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
// });

// export default OTPScreen;


{/* <View style={styles.inputView}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleOTPInput(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpInputs.current[index] = ref)}
          />
        ))}
      </View> */}





  //     <View style={styles.inputView}>
  //     <TextInput
  //       style={styles.input}
  //       value={otp}
  //       onChangeText={(otp) =>setOtp(otp)}
  //       keyboardType="numeric"
  //       maxLength={6}
  //       placeholder='please enter otp'
  //       placeholderTextColor={'grey'}
        
  //     />
  // </View>