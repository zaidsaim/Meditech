import { View, Text } from 'react-native'
import React from 'react'
import Searchbar from '../../commonComponents'
import DoctorsCategories from './findHealthConcernComponent/DoctorsCategories';
export default function FindHealthConcern() {
    const handleSearch = searchText => {
        // Your search logic here
        console.log('Searching for:', searchText);
      };
  return (
    <View style={{flex:1,backgroundColor:'white',paddingTop:10}}>
     <Searchbar placeholder="Search..." onSearch={handleSearch} />
     <DoctorsCategories/>
    </View>
  )
}