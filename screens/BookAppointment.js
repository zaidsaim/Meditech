import { View, Text ,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import React from 'react'

export default function BookAppointment({navigation}) {

    const categoryDoctors = [
        { id: 1,  specialty: 'Cardiologist', name: 'Dr. Michael', image: require('../assets/doctortwo.jpg') },
        { id: 2,  specialty: 'Pediatrician', name: 'Dr. Emily', image: require('../assets/doctorthree.jpg') },
       
      ];

    const renderDoctorItem = () => (
      <View style={{flexDirection: 'row',justifyContent:'space-evenly' }}>
      
      <TouchableOpacity style={styles.recommendedDoctorItem} onPress={()=>navigation.navigate('FindDoctors')}>
        <View style={{ backgroundColor:'#82abe8',height:150,width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Image
        source={require('../assets/doctortwo.jpg')}
        style={styles.recommendedDoctorImage}
      />
      </View>
      <View style={{padding:10}}>
      <Text style={styles.recommendedDoctorName}>Book Appointment</Text>
      <Text style={styles.recommendedDoctorSpecialty}>Confirmed Appointments</Text>
      <Text style={styles.recommendedDoctorSpecialty}>Appointments</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.recommendedDoctorItem}>
    <View style={{ backgroundColor:'#82abe8',height:150,width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Image
        source={require('../assets/doctorthree.jpg')}
        style={styles.recommendedDoctorImage}
      />
          </View>
          <View style={{padding:10}}>
           <Text style={styles.recommendedDoctorName}>Instant Video</Text>
      <Text style={styles.recommendedDoctorSpecialty}>Consultant</Text>
      <Text style={styles.recommendedDoctorSpecialty}>Connect within 60 sec</Text>
      </View>
    </TouchableOpacity>


    </View>
    
      );
    
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

  return (
    <View>
        {renderDoctorItem()}
    </View>
  )
}

const styles = StyleSheet.create({

recommendedDoctorItem: {
 
    alignItems: 'center',
    
    marginVertical:5,
    
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
    width:'45%'
    
  },
  recommendedDoctorSpecialty: {
    fontSize: 12,
    color: 'gray',
  },
  recommendedDoctorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
    
  },
  recommendedDoctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },
});