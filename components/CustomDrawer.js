import React , {useState,useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomDrawer = props => {

  const [userData, setUserData] = useState(null);
  console.log('userdata============vhbjnkml,',userData)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userValue =  await AsyncStorage.getItem('userdata');
        if (userValue !== null) {
          setUserData(JSON.parse(userValue));
        }
      } catch (error) {
        console.error("Error fetching user data from AsyncStorage", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={{flex: 1,backgroundColor:'#065E86'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#065E86'}}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/doctorfive.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Zaid Saim
          </Text>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <View style={{backgroundColor:'white',borderRadius:20,height:40,width:40}}>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('UserUpdateProfile')}>
            <Text style={{marginHorizontal:10,color:'white'}}>Edit Profile</Text>
            </TouchableOpacity>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#065E86', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} color={'white'}/>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color:'white'
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color={'white'}/>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color:'white'
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;