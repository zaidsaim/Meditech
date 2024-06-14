import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import Cards from '../components/OTCard';
import { Card } from 'react-native-paper';
import CustomCard from '../components/OTCard';
import Searchbar from '../components/OTSearchbar';
import Header from '../components/OTHeader';
import Ionicons  from 'react-native-vector-icons/Ionicons'; 
import BookAppointment from './BookAppointment';
import {recommendedDoctors,categoryDoctors,findNearDoctors} from '../utils/datas'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

  const navigation =useNavigation()
const [doctorlist,setDoctorList]=useState()
console.log('firstname========',doctorlist)
  useEffect(()=>{
    allDoctorsCategories()
    
  },[])

  const allDoctorsCategories = async () => {
  
    try {
      const uservalue = await AsyncStorage.getItem('userlogindata');
      const loginparsedValue = JSON.parse(uservalue);
   console.log('parsedValue===========',loginparsedValue?.data?.token)
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/allDoctor', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginparsedValue?.data?.token}`,
        },
      });

      const data = await response.json();
      setDoctorList(data?.data)
       console.log('doctorsdata======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };


  const handleSearch = searchText => {
    // Your search logic here
    console.log('Searching for:', searchText);
  };


  const renderDoctorItem = ({ item }) => (
   
    <TouchableOpacity style={styles.recommendedDoctorItem} onPress={()=>navigation.navigate('')}>
      <Image
        source={item.image}
        style={styles.recommendedDoctorImage}
      />
      <Text style={styles.recommendedDoctorName}>{item.name}</Text>
      <Text style={styles.recommendedDoctorSpecialty}>{item.specialty}</Text>
    </TouchableOpacity>
   
  );

  const renderDoctorAppointment = ({ item }) => (
    <View style={styles.card}>
    <TouchableOpacity style={styles.recommendedDoctorAppointment}>
      <Image
        source={item.image}
        style={styles.categoryImageAppointment}
      />
      <Text style={styles.recommendedDoctorName}>{item.name}</Text>
      <Text style={styles.recommendedDoctorSpecialty}>{item.specialty}</Text>
    </TouchableOpacity>
    </View>
  )
    const findDoctorNear = ({ item }) => (
      <View style={styles.cardStyle}>
      <View style={styles.findDoctorImageViewStyle}>
      <TouchableOpacity style={styles.findDoctorsNear}>
        <Image
          source={item.image}
          style={styles.findDoctorImageStyle}
        />
        <View style={styles.findDoctorNameViewStyle}>
        <View style={{flexDirection:'row',}}>
        <Text style={styles.recommendedDoctorName}>{item.name}</Text>
        <Ionicons name="heart" size={20} color="grey" style={{marginLeft:10,color:'red'}}/>
        </View>
        <Text style={styles.recommendedDoctorSpecialty}>{item.specialty}</Text>
        <Text style={styles.recommendedDoctorLocation}>{item.location}</Text>
        <Text style={styles.recommendedDoctorSpecialty}>{item.exp}</Text>
        </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:20}}>
        <View style={{paddingHorizontal:10,}}>
        <Text style={{color:'#065E86',fontSize:12,}}>Next Available</Text>
        <Text style={{color:'grey',fontSize:12,paddingTop:5}}>11:00 AM tomorrow</Text>
        </View>
        <View>
         <TouchableOpacity style={styles.bookButtonViewStyle}>
        <Text style={{color:'white',fontSize:12,paddingHorizontal:10,paddingVertical:5}}>Book Now</Text>
         </TouchableOpacity>
         </View>
         </View>
      </View>
      </View>
    )
//fuction 
const renderDoctor =()=>{
  return(
    <FlatList
    data={categoryDoctors}
    renderItem={renderDoctorItem}
    keyExtractor={item => item.id.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
  )
}

const recommendedDoctor =()=>{
  return(
    <FlatList
    data={categoryDoctors}
    renderItem={renderDoctorItem}
    keyExtractor={item => item.id.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
  )
}
  
const bookAppointmentSpecialDoctor =()=>{
  return(
    <FlatList
    data={categoryDoctors}
    renderItem={renderDoctorAppointment}
    keyExtractor={item => item.id.toString()}
     // Display two items per row
     horizontal
    showsHorizontalScrollIndicator={false}
  />
  )
}

const findDoctor =() =>{
  return(
    <FlatList
    data={findNearDoctors}
    renderItem={findDoctorNear}
    keyExtractor={item => item.id.toString()}
    // Display two items per row
    horizontal
    showsHorizontalScrollIndicator={false}
  />
  )
}
  return (
    <ScrollView style={styles.container}>
    <Header onPress={()=>navigation.openDrawer()}/>
    <View style={styles.container}>
    <Searchbar placeholder="Search..." onSearch={handleSearch} />
  </View>
   <View style={{height:150,width:'100%',marginVertical:10,}}>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
        <Image
        source={require('../assets/swiperone.jpg')}
        style={styles.imageStyle}
      /> 
        </View>
        <View style={styles.slide2}>
        <Image
        source={require('../assets/swipertwo.jpg')}
        style={styles.imageStyle}
      />
        </View>
        <View style={styles.slide3}>
        <Image
        source={require('../assets/swiperthree.jpg')}
        style={styles.imageStyle}
      />
        </View>
        <View style={styles.slide3}>
        <Image
        source={require('../assets/swiperthree.jpg')}
        style={styles.imageStyle}
      />
        </View>
      </Swiper>
      </View>
      <BookAppointment navigation={navigation}/>
      {/* Categories */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {renderDoctor()}
      </View>

      {/* Recommended Doctors */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Recommended Doctors</Text>
       {recommendedDoctor()}
      </View>
      <View style={styles.articles}>
        <Text style={styles.sectionTitle}>Safe and secure surgeries</Text>
      </View>
      <View style={{height:150,width:'100%'}}>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
        <Image
        source={require('../assets/swiperone.jpg')}
        style={styles.imageStyle}
      /> 
        </View>
        <View style={styles.slide2}>
        <Image
        source={require('../assets/swipertwo.jpg')}
        style={styles.imageStyle}
      />
        </View>
        <View style={styles.slide3}>
        <Image
        source={require('../assets/swiperthree.jpg')}
        style={styles.imageStyle}
      />
        </View>
        <View style={styles.slide3}>
        <Image
        source={require('../assets/swiperthree.jpg')}
        style={styles.imageStyle}
      />
        </View>
      </Swiper>
      </View>
     
      <View style={styles.recommendedtwo}>
      <Text style={styles.sectionTitle}>Book appointment with top specialist in your city</Text>
     {bookAppointmentSpecialDoctor()}
    </View>
    <View style={styles.recommendedtwo}>
    <Text style={styles.sectionTitle}>Find doctors near you</Text>
   {findDoctor()}
  </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddin6g: 20,
    backgroundColor: '#6C63FF',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  swiperContainer: {
     
    marginTop: 10,
  },
  swiper: {
    flex: 1,
  },
  swiperImage: {
    flex: 1,
    resizeMode: 'cover',
    
  },
  categories: {
    padding: 10,
    color:'grey'
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    paddingHorizontal:5,
  },
  category: {
    marginRight: 20,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryImageAppointment: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginBottom: 5,
    
  },
  findDoctorImageStyle:{
    width: 100,
    height: 100,
    borderRadius: 10,
  
  },
  findDoctorImageViewStyle:{
   
    
   
    // width: 155,
    // height: 100,
    // borderRadius: 10,
    // marginBottom: 50,
  },
  categoryText: {
    fontSize: 16,
  },
  cardStyle: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 2,
    borderColor:'#E8E9EB',
    borderWidth:1,
    marginHorizontal:5,
    marginVertical:5
    
  },
  recommendedtwo: {
    padding: 10,
    backgroundColor:'white',
    
    
  },
  recommendedDoctorItem: {
    marginRight: 10,
    alignItems: 'center',
    paddingVertical:30,
    marginVertical:5,
    marginHorizontal:5,
    color:'#f5f3f0',
    borderRadius:5,
    shadowColor: '#cadbd1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    borderColor:'#E8E9EB',
    borderWidth:1,
    width:130
    
  },
  recommendedDoctorAppointment:{
    marginRight: 10,
    alignItems: 'center',
    paddingVertical:20,
   borderRadius:5,
    marginHorizontal:5,
    marginVertical:5,
    width:150,
    shadowColor: '#cadbd1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    
    borderColor:'#E8E9EB',
    borderWidth:1,
  },
  findDoctorsNear:{
    alignItems: 'center',
    color:'#f5f3f0',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  recommendedDoctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },
  recommendedDoctorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
    
  },
  findDoctorNameViewStyle: {
    marginLeft:50,
    
    
  },
  recommendedDoctorSpecialty: {
    fontSize: 12,
    color: 'gray',
  },
  recommendedDoctorLocation: {
    fontSize: 12,
    color: 'gray',
  },
  articles: {
    marginHorizontal:5,
    marginVertical:5
  },
  wrapper: {},
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    
  },
 
  slide2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: '100%',
    height: 350,
    borderRadius:20
  },
  bookButtonViewStyle:{
    backgroundColor:'#065E86',
    padding:3,
    borderRadius:3,
    marginVertical:5
  }
});

export default HomeScreen;

