import { View, Text,FlatList,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React , {useEffect,useState} from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { specialistDoctor } from '../../../utils/datas'
import { Divider } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
export default function DoctorsCategories() {

  const navigation=useNavigation()
  const [doctorlist,setDoctorList]=useState()
  console.log('firstname========',doctorlist)
  useEffect(()=>{
    allDoctorsCategories()
    
  },[])

  const allDoctorsCategories = async () => {
  
    try {
      const uservalue = await AsyncStorage.getItem('userlogindata');
      const loginparsedValue = JSON.parse(uservalue);
   console.log('parsedValue===========',loginparsedValue.data.token)
      const response = await fetch('https://healthcare-backend-3jr5.onrender.com/v1/patient/allDoctor', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginparsedValue.data.token}`,
        },
      });

      const data = await response.json();
      setDoctorList(data.data)
       console.log('doctorsdata======>',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };




  const renderSpecialist = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('DoctorBookingProfile',{item:item})} style={styles.recommendedDoctorItem}>
    <View style={{}}>
      <View style={{flexDirection:'row',}}>
        <Image source={item.image}   style={styles.recommendedDoctorImage}/>
      {/* <Image
      source={ require('../../../assets/doctortwo.jpg')}
       // source={{uri:item.profilePicture}}
        style={styles.recommendedDoctorImage}
      /> */}
      <View style={{marginVertical:20,marginHorizontal:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:5}}>
        <Text style={styles.recommendedDoctorName}>{item.name}</Text>
        <View style={{paddingHorizontal:10}}>
        <MaterialIcons  name="check-circle" size={18} color='#065E86' style={{marginHorizontal:20}}/>
        </View>
        </View>
      <Text style={styles.doctorspecialty}>dentist</Text>
      <Text style={styles.doctorspecialty}>{item.experience} years experience</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:5}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <MaterialIcons  name="thumb-up" size={22} color='#065E86' style={{}}/>
      <Text style={{color:'grey',marginLeft:5,fontSize:12}}>98%</Text>
      </View>
      {/* <View style={{flexDirection:'row',alignItems:'center',marginLeft:10,}}>
      <MaterialIcons  name="chat" size={22} color='#065E86' style={{}}/>
      <Text style={{color:'grey',fontSize:12}}>184 Patient</Text>
      </View> */}
      </View>
      <View style={{backgroundColor:'#065E86',flexDirection:'row',width:80,alignItems:'center',justifyContent:'space-evenly',paddingVertical:2,borderRadius:5,marginTop:10}}>
      <MaterialIcons  name="chat" size={16} color='white' style={{}}/>
      <Text style={{color:'white'}}>4.5</Text>
      </View>
      </View>
    </View>
    </View>
    <View style={{margin:10}}>
    <Divider />
    <View style={{flexDirection:'row',marginVertical:5}}>
      <Text style={{color:'black'}}>noida</Text>
      <Text style={{color:'grey',marginHorizontal:10}}>clinic</Text>
      </View>
      <View style={{flexDirection:'row',}}>
      <Text style={{color:'black'}}>${item.onlineConsultationFees}</Text>
      <Text style={{color:'grey',marginHorizontal:10}}>Consultant fees</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:'#065E86',fontSize:13,fontWeight:'bold'}}> NEXT AVAILABLE AT</Text>
      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
      <MaterialIcons  name="videocam" size={22} color='#065E86'  style={{marginHorizontal:0}}/>
      <Text style={{color:'grey',fontSize:12,}}>Available for video consultant</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <MaterialIcons  name="home" size={22} color='#065E86'  style={{marginHorizontal:0}}/>
      <Text style={{color:'grey',fontSize:12,marginHorizontal:10}}>04:00 PM, today</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
      <TouchableOpacity style={{borderRadius:5,padding:10,borderColor:'#065E86',borderWidth:1}}>
        <Text style={{color:'#065E86'}}>Contact Hospital</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10,backgroundColor:'#065E86',borderRadius:5}}>
        <Text style={{color:'white'}}>Book Client Visit</Text>
      </TouchableOpacity>

      </View>
      </View>
      </TouchableOpacity>

    
  );

  return (
    <>
    <View style={{backgroundColor:'white',marginBottom:100}}>
    <View >
      <Text>Results offering Prime benefits</Text>
    </View>
   
  <FlatList
        data={specialistDoctor}
        renderItem={renderSpecialist}
        keyExtractor={item => item.id.toString()}
       
      />
      </View>
  </>
  )
}


const styles = StyleSheet.create({
  recommendedDoctorItem: {
    
    
    marginVertical: 5,
    justifyContent:'space-between',
    color: '#f5f3f0',
   // flexDirection:'row',
    borderRadius: 5,
    shadowColor: '#cadbd1',
    marginHorizontal:10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    borderColor: '#E8E9EB',
    borderWidth: 1,
    
  
    // Adjusting item width based on screen width
  },
  recommendedDoctorSpecialty: {
    fontSize: 14,
    color: 'gray',
  },
  doctorspecialty:{
    fontSize:14,
    color:'grey',
  },
  recommendedDoctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:3
  },
  recommendedDoctorImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
    margin: 5,
    marginTop:10
  },
  flatListContent: {
    justifyContent: 'center',
    paddingHorizontal: 4
  }
});
