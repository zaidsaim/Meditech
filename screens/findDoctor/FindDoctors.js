import { View, Text, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import Searchbar from '../../components/OTSearchbar'
import Specialist from './finddoctorComponent.js/Specialist';
import FindSurgeons from './finddoctorComponent.js/findSurgeons';
import Symptoms from './finddoctorComponent.js/Symptoms';
import Commonsymptoms from './finddoctorComponent.js/Commonsymtomps';
import Categories from './finddoctorComponent.js/Categories';
import Allspecialist from './finddoctorComponent.js/Allspecialist';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function FindDoctors({navigation}) {

    const [searchText, setSearchText] = useState('');

    const onSearch = (text) => {
        console.log('Search performed with text:', text);
      };
    const handleSearch = () => {
      onSearch(searchText);
    };

   


  return (
    <ScrollView>
    <Searchbar 
    placeholder={'Search Symptoms/Specialities'}
    value={searchText}
    onChangeText={setSearchText}
    onSubmitEditing={handleSearch}
    />
    <Specialist navigation={navigation}/>
    <FindSurgeons />
    <Symptoms/>
    <Commonsymptoms/>
    <Categories/>
    <Allspecialist/>
    </ScrollView>
  )
}