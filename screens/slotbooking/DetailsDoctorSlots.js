import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailsDoctorSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Sample data for morning, afternoon, and evening slots
  const morningSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '10:00 AM', '11:00 AM', '12:00 PM', '10:00 AM', '11:00 AM', '12:00 PM'];
  const afternoonSlots = ['01:00 PM', '02:00 PM', '03:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'];
  const eveningSlots = ['04:00 PM', '05:00 PM', '06:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];

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
    <View style={{ flex: 1 }}>
      {/* Date selection */}
      

      {/* Content */}
      <ScrollView style={{  }}>
        <View style={{ flexDirection: 'row', padding: 10 ,alignItems:'center',}}>
          <MaterialIcons name="home" size={24} color="grey" style={styles.icon} />
          <Text style={{ color: 'black', fontSize: 16, marginHorizontal: 10, fontWeight: 'bold' }}>Clinic Visit Slots</Text>
        </View>
        {monthDate()}
        {/* Morning Slots */}
        <View style={styles.slotContainer}>
          <Text style={styles.slotTitle}>Morning</Text>
          <View style={styles.slotRow}>
            {morningSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slotButton,
                  { borderBottomColor: selectedSlot === slot ? 'blue' : 'transparent' }
                ]}
                onPress={() => handleSlotSelection(slot)}
              >
                <Text style={styles.slotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Afternoon Slots */}
        <View style={styles.slotContainer}>
          <Text style={styles.slotTitle}>Afternoon</Text>
          <View style={styles.slotRow}>
            {afternoonSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slotButton,
                  { borderBottomColor: selectedSlot === slot ? 'blue' : 'transparent' }
                ]}
                onPress={() => handleSlotSelection(slot)}
              >
                <Text style={styles.slotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Evening Slots */}
        <View style={styles.slotContainer}>
          <Text style={styles.slotTitle}>Evening</Text>
          <View style={styles.slotRow}>
            {eveningSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slotButton,
                  { borderBottomColor: selectedSlot === slot ? 'blue' : 'transparent' }
                ]}
                onPress={() => handleSlotSelection(slot)}
              >
                <Text style={styles.slotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Display selected slot */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: 'grey' }}>Selected Slot: {selectedSlot || 'No slot selected'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

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
    marginTop: 5,
  },
});

export default DetailsDoctorSlots;
