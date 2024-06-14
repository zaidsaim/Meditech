import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, StyleSheet,TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Destructure the parameter from route
  const { paramKey } = route.params;

  // Function to handle form input change
  const handleInputChange = (key, value) => {
    setFormData(prevData => ({ ...prevData, [key]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [key]: '' })); // Clear previous error on input change
  };

  // Function to validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check for empty fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = 'This field is required.';
        isValid = false;
      }
    }

    // Check email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    // Validate form fields
    if (!validateForm()) {
      return;
    }

    // Submit data to server
    const formDataToSend = new FormData();
    formDataToSend.append('first_name', formData.firstName);
    formDataToSend.append('last_name', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('user_image', {
      uri: paramKey.xt_image,
      type: 'image/jpeg',
      name: 'user_image.jpg',
    });

    try {
      const response = await fetch('http://dev3.xicom.us/xttest/savedata.php', {
        method: 'POST',
        body: formDataToSend,
      });

      // Check if the request was successful
      if (response.ok) {
        Alert.alert('Data submitted successfully!');
        // Clear form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
      } else {
        Alert.alert('Failed to submit data. Please try again later.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Failed to submit data. Please try again later.');
    }
  };

  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.imageView}>
      <Image
        source={{ uri: paramKey.xt_image }}
        style={styles.image}
      />
      </View>
      <View style={styles.inputView}>
      <KeyboardAvoidingView>
      <View style={styles.inputGroup}>
      <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="First Name"
          value={formData.firstName}
          onChangeText={text => handleInputChange('firstName', text)}
          style={[styles.input, errors.firstName && styles.errorInput]}
          placeholderTextColor={'grey'}
          />
        {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="Last Name"
          value={formData.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
          style={[styles.input, errors.lastName && styles.errorInput]}
          placeholderTextColor={'grey'}
          />
        {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}
       </View>
       <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={text => handleInputChange('email', text)}
          keyboardType="email-address" 
          style={[styles.input, errors.email && styles.errorInput]}
          placeholderTextColor={'grey'}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={text => handleInputChange('phone', text)}
          keyboardType="phone-pad"
          style={[styles.input, errors.phone && styles.errorInput]}
          placeholderTextColor={'grey'}
        />
        {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
        </View>
        </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginHorizontal:20,
    backgroundColor:'white',
    borderRadius:10,
    color:'grey'
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal:20
  },
  image: {
    width: '95%',
    height: 200,
 padding:10,
 marginHorizontal:10,
 marginVertical:5,
 padding:10,
 borderRadius:10
  },
  submitButton:{
    backgroundColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom:10,
    marginHorizontal:20,
    borderRadius:10,
    marginVertical:20
  },
  
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  inputView:{
    marginVertical:20,
    color:'grey'
  },
  label: {
    color: 'grey',
    marginBottom: 5,
    marginHorizontal:20
  },
  inputGroup: {
    marginBottom: 5,
  },
  imageView:{
    marginVertical:10,
  }
});

export default DetailsScreen;
