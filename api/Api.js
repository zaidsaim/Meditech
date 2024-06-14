
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';



  


const handleSignup = async (firstName, lastName, phone, password,navigation) => {
  try {
    const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        password: password,
      }),
    });

    const data = await response.json();
    await AsyncStorage.setItem('userdata', JSON.stringify(data));
    const value = await AsyncStorage.getItem('userdata');
    const parsedValue = JSON.parse(value);

    console.log('user========', parsedValue);
    console.log('data======>', data);

    if (response.status === 200) {
     
      console.log('Signup successful!');
      navigation.navigate('OtpScreen')
      console.log('Signup successful:', data);
    } else {
      console.log('Signup failed. Please try again.');
      console.log('Signup failed:', data);
    }
  } catch (error) {
    console.log('An error occurred. Please try again.');
    console.error('Error:', error);
  }
};


  const patientLogin = async (phone,password,navigation) => {
    console.log('data=========>check',phone,password)
    try {
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           phone: phone,
           // email:email,
            password: password,
        }),
      });
  console.log('response=================',JSON.stringify(response))
      const data = await response.json();
      console.log('datacheckkkkkkk=========',data)
      await AsyncStorage.setItem('userlogindata', JSON.stringify(data));
      const uservalue = await AsyncStorage.getItem('userlogindata');
      const loginparsedValue = JSON.parse(uservalue);
      console.log('loginparsedata========',loginparsedValue)
      if(response.status  === 200){
        navigation.navigate('drawer')
      }
  console.log('data======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleOtpSubmit = async (otp,navigation) => {
    console.log('otp=========',otp)
    try {
      const value = await AsyncStorage.getItem('userdata');
    const parsedValue = JSON.parse(value);
   console.log('parsedValue===========',parsedValue?.data?.token)
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${parsedValue?.data?.token}`,
        },
        body: JSON.stringify({
          otp:otp,
        }),
      });

      const data = await response.json();
      if(response.status  === 200){
        navigation.navigate('login')
      }
       console.log('data======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  const forgotPassword = async (password,confirmPassword) => {
    
    try {
      const value = await AsyncStorage.getItem('userdata');
      const parsedValue = JSON.parse(value);
      console.log('user========token', parsedValue?.data?.token);
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${parsedValue?.data?.token}`,
        },
        body: JSON.stringify({
            password: password,
            confirmPassword:confirmPassword
        }),
      });
  
      const data = await response.json();
  console.log('data======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };


  const patientUpdateProfile = async (
    firstName,
    lastName,
    bloodGroup,
    gender,
    age,
    selectedProblems,
    selectedImage,
    area,
    city,
    state
  ) => {
    
    const value = await AsyncStorage.getItem('userdata');
    const parsedValue = JSON.parse(value);
    console.log('user========token', parsedValue.data.token);
    try {
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/updateProfile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${parsedValue.data.token}`,
        },
       
        body: JSON.stringify({
            firstName: firstName,
            lastName:lastName,
            age: age,
            gender:gender ,
            area : area ,
            city: city,
            state: state,
            bloodGroup: bloodGroup,
            patientCondition: selectedProblems,
            profilePicture: selectedImage,
        }),
      });
      const data = await response.json();
  console.log('data======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };


  


  export {handleSignup,patientLogin,forgotPassword,handleOtpSubmit,patientUpdateProfile,}