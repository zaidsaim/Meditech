import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { specialist } from '../../../utils/datas';

const Specialist = ({navigation}) => {
  const numColumns = 4; // Number of items you want per row
  const [showMore, setShowMore] = useState(false);

  const renderSpecialist = ({ item }) => (
    <TouchableOpacity style={styles.recommendedDoctorItem} onPress={()=>navigation.navigate('findHealthConcern')}>
      <Image
        source={item.image}
        style={styles.recommendedDoctorImage}
      />
      <Text style={styles.recommendedDoctorName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{color:'black',fontSize:14,fontWeight:'bold',marginHorizontal:20}}>Specialist most relevant to you</Text>
      <FlatList
        data={showMore ? specialist : specialist.slice(0, numColumns)}
        renderItem={renderSpecialist}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
        
      />
      {!showMore && specialist.length > numColumns && (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={() => setShowMore(true)}
        >
          <Text style={styles.showMoreText}>View More</Text>
        </TouchableOpacity>
      )}
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
    maxWidth: (Dimensions.get('window').width - 16 * 3) / 4 // Adjusting item width based on screen width
  },
  recommendedDoctorSpecialty: {
    fontSize: 12,
    color: 'gray',
  },
  recommendedDoctorName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:3
  },
  recommendedDoctorImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
  },
  flatListContent: {
    justifyContent: 'center',
    paddingHorizontal: 4
  },
  showMoreButton: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    width:'90%',
    alignItems:'center',
    backgroundColor: '#065E86',
  },
  showMoreText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Specialist;
