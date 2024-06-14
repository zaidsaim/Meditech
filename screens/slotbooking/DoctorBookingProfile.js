import { View, Text ,Image, ScrollView,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import React ,{useState,useEffect} from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import { Divider } from '@rneui/themed';
import { useRoute,useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DoctorBookingProfile() {
  const route = useRoute();
  const { item } = route.params;
  
  console.log('detailsprops=====>',item)
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const navigation=useNavigation()
  const [doctorProfileList,setDoctorProfileList]=useState()
  console.log('firstname========',doctorProfileList)
  useEffect(()=>{
    doctorBookingProfileApi()
    
  },[])

  const doctorBookingProfileApi = async () => {
  
    try {
      
      const uservalue = await AsyncStorage.getItem('userlogindata');
      const loginparsedValue = JSON.parse(uservalue);
   console.log('parsedValue===========',loginparsedValue.data.token)
      const response = await fetch(`https://healthcare-backend-3jr5.onrender.com/v1/patient/getDoctorDetail?id=${item.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginparsedValue.data.token}`,
        },
      });

      const data = await response.json();
      setDoctorProfileList(data.data)
       console.log('details==========doctor',data)
    } catch (error) {
      console.log('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };



  // Sample data for dates and times
  const dates = ['May 26', 'May 27', 'May 28','May 26', 'May 27', 'May 28','May 26', 'May 27', 'May 28','May 26', 'May 27', 'May 28']; // Sample dates
  const times = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM','10:00 AM', '11:00 AM',]; // Sample times

  
  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when date changes
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  function dateSlots(){
    return(
      <View style={{ flex: 1 }}>
      <ScrollView horizontal>
        {/* Date Selection */}
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={{ padding: 10, borderBottomWidth: 4, borderBottomColor: selectedDate === date ? '#065E86' : 'transparent' }}
            onPress={() => handleDateSelection(date)}
          >
            <View style={{padding:10}}>
            <Text style={{color:'grey'}}>{date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Time Selection */}
      <ScrollView>
        {selectedDate && (
          <FlatList
            data={times}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ paddingTop:10,  borderBottomColor: selectedTime === item ? '#065E86' : 'transparent' }}
                onPress={() => handleTimeSelection(item)}
              >
                <View style={{padding:10,flexDirection:'row',backgroundColor:'#065E86',marginHorizontal:20}}>
                <Text style={{color:'white'}}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      {/* Display selected date and time */}
      {/* <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{color:'grey'}}>Selected Date: {selectedDate || 'No date selected'}</Text>
        <Text style={{color:'grey'}}>Selected Time: {selectedTime || 'No time selected'}</Text>
      </View> */}
    </View>
    )
  }



  return (
    <ScrollView style={{}}>
      
        <View style={{backgroundColor:'#82abe8',padding:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,marginHorizontal:10}}>
          <TouchableOpacity>
        <MaterialIcons name="west" size={22} color="white"  onPress={()=>navigation.goBack()}/>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="folder-shared" size={22} color="white" style={{marginHorizontal:10}}  />
        <MaterialIcons name="share" size={22} color="white"  />
        </View>
        </View>
       
       <View style={{flexDirection:'row',padding:10}}>
        <View style={{}}>
      <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{item.firstName}</Text>
      <View style={{marginVertical:20}}>
      <Text style={{color:'black',fontSize:14,marginVertical:2}}>Orthodonist, Cosmetic/Aes..</Text>
      <Text style={{color:'black',fontSize:14,marginVertical:2}}>BDS, MDS-Orthodontics</Text>
      <Text style={{color:'black',fontSize:14,marginVertical:2,fontWeight:'bold'}}>{item.overallExperience} years experience overall</Text>
      
      </View>
      </View>
      <View>
        <Image source={require('../../assets/doctoreight.jpg')} style={{width:130,height:130,borderRadius:70,marginHorizontal:10}}/>
      </View>
      </View>
      </View>
      <View style={{backgroundColor:'white'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center',backgroundColor:'white'}}>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <MaterialIcons name="thumb-up" size={24} color="grey"  />
         <Text  style={{color:'grey',fontSize:16,marginHorizontal:10}}>89%</Text>
</View>
<Text  style={{color:'grey'}}>Patient Recommendation</Text>
</View>
        <View style={{alignItems:'center',justifyContent:'center',}}>
        <View style={{alignItems:'center',flexDirection:'row'}}>
        <MaterialIcons name="star" size={24} color="grey"  />
            <Text  style={{color:'grey',marginHorizontal:10}}>4.4/5</Text>
            </View>
            <Text  style={{color:'grey'}}>Clinic Excellence Rating</Text>
       </View>
       </View>
       <View style={{marginHorizontal:10}}>
      <View style={{backgroundColor:'#82abe8',flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <MaterialIcons name="home" size={24} color="white"  />
        <Text  style={{color:'black',fontSize:16,marginHorizontal:10}}>In-clinic Appointment</Text>
        </View>
       
        <Text  style={{color:'black'}}>{item.onlineConsultationFees} FEES</Text>
      </View>
      <View style={{padding:10}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Dental De Care</Text>
        <Text style={{color:'black',fontWeight:300}}>Domlur</Text>
        <Text style={{color:'grey'}}>30 mins or less wait time</Text>
      </View>
      </View>
      
      {dateSlots()}
      <View style={{backgroundColor:'grey',padding:10,marginHorizontal:20,alignItems:'center',marginVertical:15}}>
        <Text style={{color:'#065E86',fontWeight:'bold',fontSize:16}}>View all Slots</Text>
      </View>
      {/* <View>
        <Text style={{color:'grey'}}>All Care Dental Centre-since</Text>
        <Text style={{color:'grey'}}>Indiranagar</Text>
        <Text style={{color:'grey'}}>Verified details</Text>
      </View> */}
      <View style={{padding:10,backgroundColor:'white',marginHorizontal:10,marginVertical:10}}>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Clinic Details</Text>
        <Text style={{color:'black',fontSize:14}}>Dental De Care</Text>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="star" size={24} color="green"  />
        <Text style={{color:'grey'}}>4.5</Text>
        </View>
        <Text style={{color:'grey'}}>Indiranagr</Text>
        <Text style={{color:'grey'}}>$300 In-clinic fees</Text>
        <Text style={{color:'grey'}}>Healthcare forays into Dental care, launches</Text>
        </View>
      </View>
      <View style={{}}>
        <View style={styles.card}>
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Clinic Excellence</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="star" size={24} color="grey"  />
                <Text style={{color:'black'}}>4.5/5</Text>
            </View>
        </View>
        <View style={{}}>
            <Text style={{color:'grey'}}>The clinic excellence rating is the first score of its kind in</Text>
            <Text style={{color:'grey'}}>India evaluating a clinic infrastructure, equipment, and</Text>
            <Text style={{color:'grey'}}>facilities through an auditing process</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Dental Excellence</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="star" size={24} color="grey"  />
                <Text style={{color:'black'}}>4.5/5</Text>
            </View>
        </View>
        <View style={{}}>
            <Text style={{color:'grey'}}>The clinic excellence rating is the first score of its kind in</Text>
            <Text style={{color:'grey'}}>India evaluating a clinic infrastructure, equipment, and</Text>
            <Text style={{color:'grey'}}>facilities through an auditing process</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Patient Convencies</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="star" size={24} color="grey"  />
                <Text style={{color:'black'}}>4.5/5</Text>
            </View>
        </View>
        <View style={{}}>
            <Text style={{color:'grey'}}>The clinic excellence rating is the first score of its kind in</Text>
            <Text style={{color:'grey'}}>India evaluating a clinic infrastructure, equipment, and</Text>
            <Text style={{color:'grey'}}>facilities through an auditing process</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Hygene & safety</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="star" size={24} color="grey"  />
                <Text style={{color:'black'}}>4.5/5</Text>
            </View>
        </View>
        <View style={{}}>
            <Text style={{color:'grey'}}>The clinic excellence rating is the first score of its kind in</Text>
            <Text style={{color:'grey'}}>India evaluating a clinic infrastructure, equipment, and</Text>
            <Text style={{color:'grey'}}>facilities through an auditing process</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Clinic Excellence</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="star" size={24} color="grey"  />
                <Text style={{color:'black'}}>4.5/5</Text>
            </View>
        </View>
        <View style={{}}>
            <Text style={{color:'grey'}}>The clinic excellence rating is the first score of its kind in</Text>
            <Text style={{color:'grey'}}>India evaluating a clinic infrastructure, equipment, and</Text>
            <Text style={{color:'grey'}}>facilities through an auditing process</Text>
        </View>
        </View>
        
        <View style={{backgroundColor:'white',paddingTop:10,marginVertical:10}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingTop:20,marginHorizontal:20}}>Patient Stories</Text>
            <Divider style={{marginHorizontal:20,paddingTop:20}}/>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name="thumb-up" size={24} color="green"  />
                <Text style={{color:'grey',marginHorizontal:10}}>96%</Text>
            </View>
            <View>
                <Text style={{color:'grey',paddingTop:10}}>Out of 55 patient who</Text>
                <Text style={{color:'grey'}}>were surveyed, 96% of them</Text>
                <Text style={{color:'grey',marginBottom:10}}>recommend visiting this doctor</Text>
            </View>
            </View>
        </View>
        <View style={{backgroundColor:'white',marginBottom:10}}>
        <Divider style={{marginHorizontal:20}}/>
        <View style={{marginHorizontal:10}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:20,}}>
            <View style={{backgroundColor:'grey',width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>V</Text>
            </View>
            <View >
            <Text style={{color:'black'}}>Verified Patient</Text>
            <Text style={{color:'grey'}}>19 days ago</Text>
            </View>
            <View>
            <MaterialIcons name="thumb-up" size={24} color="green"  />
            </View>
           
        </View>
        <View style={{paddingTop:10}}>
     <Text style={{color:'black',fontSize:16}}>Visited for Dental Cleaning, Mucogingival</Text>
     <Text style={{color:'grey',fontSize:16,fontWeight:300}}>Very Nice Doctor, Very Bice treatment, Very</Text>
     <Text style={{color:'grey',fontSize:16,fontWeight:300}}>Very Nice Doctor, Very Bice treatment, Very</Text>
     </View>
     <View>
        <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingTop:20}}>About The Doctor</Text>
        <Text style={{color:'black',fontSize:14,paddingTop:20}}>{item.firstName} {item.lastName}</Text>
        <View style={{flexDirection:'row',paddingTop:10}}>
        <MaterialIcons name="school" size={24} color="grey"  />
        <Text style={{color:'black',marginHorizontal:10}}>BDS,MDS-Orthodontics</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="verified-user" size={24} color="grey"  />
        <Text style={{color:'black',fontSize:14,marginHorizontal:10}}>Council Verified</Text>
        </View>
     </View>
     <Text style={{color:'black',fontSize:18,fontWeight:'bold',paddingTop:20,}}>About</Text>
     <View style={{paddingTop:10}}>
     <Text style={{color:'grey'}}>{item.aboutMe}</Text>
     
     </View>
     <View>
        <View style={{flexDirection:'row',borderWidth:1,color:'grey',justifyContent:'space-between',alignItems:'center',padding:10,marginVertical:20}}>
            <Text style={{color:'grey',marginHorizontal:10}}>{item.firstName} {item.lastName}</Text>
            <MaterialIcons name="check" size={24} color="grey"  />
        </View>
     </View>
     <View>
        <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Education and achievement</Text>
        <Text style={{color:'grey'}}>Know more about {item.firstName} {item.lastName} education</Text>
     </View>
     <View>
        <Text style={{color:'black',fontSize:16,paddingTop:10,fontWeight:'bold'}}>Specializations of {item.firstName} {item.lastName}</Text>
        <View style={{flexDirection:'row',paddingTop:10}}>
        <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Orthodontist</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Deniest</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Dentofacial Orthopedist</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Dental Surgeon</Text>
        </View>
     </View>
     <View style={{paddingTop:20}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Awards of {item.firstName} {item.lastName}</Text>
     <View style={{flexDirection:'row',paddingTop:10}}>
     <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Best Teacher Award by MRADC</Text>
    </View>
        <View style={{flexDirection:'row',marginBottom:10}}>
        <MaterialIcons name="check-circle" size={24} color="grey"  />
        <Text style={{color:'grey',marginHorizontal:10}}>Best Clinical Excellence by ios</Text>
        </View>
        </View>
        </View>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      margin:10,
          shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
  
