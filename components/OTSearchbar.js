import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; // Import the search icon from Feather

const OTSearchbar = ({ placeholder, onSearch,value,onChangeText,onSubmitEditing }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="grey" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={'grey'}
        color='grey'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#f5f7f6',
    borderColor: 'none',
    paddingHorizontal: 10,
    margin: 10,
   borderRadius:20
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
   
  },
});

export default OTSearchbar;
