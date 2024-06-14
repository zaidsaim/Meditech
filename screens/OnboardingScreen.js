import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const handleOnDone = () => {
    navigation.navigate('login'); // Assuming 'Login' is the name of your login screen component
  };

  const donebtn = ({...props}) =>{
    return(
        <TouchableOpacity style={{backgroundColor:'white',padding:5,marginHorizontal:10,
        borderRadius:5,width:'40%',alignItems:'center'}} {...props}>
        <Text style={{color:'black',fontSize:14}}>done</Text>
        </TouchableOpacity>
    )
    
  }
  return (
    
    <Onboarding
    onDone={handleOnDone}
    onSkip={handleOnDone}
    DoneButtonComponent={donebtn}
    titleStyles={{fontSize:16}}
    subTitleStyles={{fontSize:12}}
    imageContainerStyles={{height:300,width:'100%',}}
    containerStyles={{}}
      pages={[
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../assets/doctortwo.jpg')}
              style={styles.imageStyle}
            />
          ),
          title: 'Meet Doctors Online',
          subtitle: 'Connect with Specialized Doctors',
        },
        {
          backgroundColor: '#2196F3',
          image: (
            <Image
              source={require('../assets/doctortwo.jpg')}
              style={styles.imageStyle}
            />
          ),
          title: 'Connect with Online',
          subtitle: 'Connect with Specialized Doctors Online for',
        },
        {
          backgroundColor: 'orange',
          image: (
            <Image
              source={require('../assets/doctorthree.jpg')}
              style={styles.imageStyle}
            />
          ),
          title: 'Thousands of Online Specialist',
          subtitle: 'Connect with Specialized Doctors Online for',
       
        
        },
        {
            backgroundColor: 'grey',
            image: (
              <Image
                source={require('../assets/doctorthree.jpg')}
                style={styles.imageStyle}
              />
            ),
            title: 'lets start',
            subtitle: 'Connect with Specialized Doctors Online for',
         
          
          },
      ]}
      
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
   height:200,
   borderRadius:100
  },
});

export default OnboardingScreen;
