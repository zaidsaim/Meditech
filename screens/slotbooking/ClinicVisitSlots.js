import { View, Text ,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Divider } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ClinicVisitSlots() {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const morningSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '10:00 AM', '11:00 AM', '12:00 PM', '10:00 AM', '11:00 AM', '12:00 PM'];

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
      };
    
      const getSlotsAvailability = (slots) => {
        // Assuming this function checks the availability of slots for the given date
        // and returns the corresponding text indicating availability
        // Here, we just return a placeholder text for demonstration purposes
        return "Slots available";
      };
    const monthDate = () => {
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateContainer}>
            {[...Array(7)].map((_, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const options = { weekday: 'long', day: 'numeric' };
              const formattedDate = date.toLocaleDateString('en-US', options);
              const today = new Date().getDate();
              if (index === 0) {
                return (
                  <TouchableOpacity key={index} style={styles.dateButton}>
                    <Text style={styles.dateText}>{`Today ${formattedDate}`}</Text>
                    <Text style={styles.availabilityText}>{getSlotsAvailability(morningSlots)}</Text>
                  </TouchableOpacity>
                );
              } else if (index === 1) {
                return (
                  <TouchableOpacity key={index} style={styles.dateButton}>
                    <Text style={styles.dateText}>{`Tomorrow ${formattedDate}`}</Text>
                    <Text style={styles.availabilityText}>{getSlotsAvailability(morningSlots)}</Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity key={index} style={styles.dateButton}>
                    <Text style={styles.dateText}>{formattedDate}</Text>
                    <Text style={styles.availabilityText}>{getSlotsAvailability(morningSlots)}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        );
      };
  return (
    <View>
         <View style={{ flexDirection: 'row', padding: 20 ,alignItems:'center',}}>
            <View style={{backgroundColor:'blue',borderRadius:20,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
          <MaterialIcons name="home" size={24} color="white" style={styles.icon} />
          </View>
          <Text style={{ color: 'black', fontSize: 16, marginHorizontal: 10, fontWeight: 'bold' }}>Clinic Visit Slots</Text>
        </View>
        {monthDate()}
        <View style={{alignItems:'center',padding:20}}>
        <Text style={{color:'black',fontSize:18}}>Today, 29 May</Text>
        </View>
        <Divider />
        <View style={{alignItems:'center',marginTop:20}}>
      <Text style={{color:'grey',margin:20}}>No slots available</Text>
      </View>
      <View style={{backgroundColor:'blue',borderRadius:5,margin:50,padding:10,alignItems:'center'}}>
        <Text style={{color:'white'}}>Next available on Thu, 30 May</Text>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{color:'grey'}}>OR</Text>
      </View>
      <View style={{alignItems:'center',borderColor:'blue',borderWidth:1,borderRadius:5,padding:10,marginVertical:20,marginHorizontal:50}}>
        <Text style={{color:'blue'}}>Next available on Thu, 30 May</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    dateContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      
    },
    dateButton: {
      padding: 3,
      marginRight: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
      borderColor:'green',
      borderWidth:1,
      width:'18%',
      marginHorizontal:10,
      alignItems:'center'
    },
    dateText: {
      fontWeight: 'bold',
      color:'grey',
          fontSize:14,
    },
    availabilityText: {
      marginTop: 5,
      color: 'green',
    },
    slotContainer: {
      marginBottom: 20,
    },
    slotTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'grey',
      padding: 10,
      fontSize:16
    },
    slotRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
     
      paddingHorizontal: 5
    },
    slotButton: {
      padding: 10,
      
      borderColor: '#065E86',
      borderWidth: 1,
      marginVertical: 5,
  
    },
    slotText: {
      color: '#065E86',
    },
    icon: {
    //   marginTop: 5,
    },
  });