import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { specialist } from '../../../utils/datas';
import { categories } from '../../../utils/datas';
const Categories = () => {
  const numColumns = 2; // Number of items you want per row
  const [showMore, setShowMore] = useState(true); // Set to true by default

  const renderSpecialist = ({ item }) => (
    <TouchableOpacity style={styles.recommendedDoctorItem}>
      <Image
        source={item.image}
        style={styles.recommendedDoctorImage}
      />
      <Text style={styles.recommendedDoctorName}>{item.name}</Text>
      <Text style={styles.recommendedDoctorSpecialty}>{item.categories}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
    <Text style={{color:'black',padding:20,fontWeight:'bold'}}>Symtoms relevant to you</Text>
      <FlatList
        data={showMore ? categories : categories.slice(0, numColumns)}
        renderItem={renderSpecialist}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedDoctorItem: {
    alignItems: 'center',
    marginVertical: 5,
    color: '#f5f3f0',
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
    flex: 1,
    margin: 4,
    maxWidth: (Dimensions.get('window').width - 16 * 3) / 2 // Adjusting item width based on screen width
  },
  recommendedDoctorSpecialty: {
    fontSize: 12,
    color: 'gray',
    margin:5
  },
  recommendedDoctorName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:3
  },
  recommendedDoctorImage: {
    width: '90%',
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
  flatListContent: {
    justifyContent: 'center',
    paddingHorizontal: 4
  }
});

export default Categories;
