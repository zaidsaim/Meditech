import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons'; // Assuming you're using Expo for the icons

const Header = ({onPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.location}>
        <Ionicons name="location-sharp" size={20} color="grey" />
        <Text style={styles.locationText}>New York, USA</Text>
        <Ionicons name="chevron-down-outline" size={14} color="grey" style={{marginLeft:5}}/>
      </View>
      <Ionicons name="person-circle-outline" size={20} color="grey" onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 12,
    color:'grey'
  },
});

export default Header;
