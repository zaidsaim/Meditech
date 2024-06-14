
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { ButtonGroup } from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import Textinputcom from '../components/OTTextinput';
import CustomDatepicker from '../components/OTDatepicker';
import Phoneinput from '../components/OTPhoneInput';
import { color } from '@rneui/themed/dist/config';
import Button from '../components/OTButton';
import Headercom from '../components/headercom';
import { Divider } from '@rneui/themed';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import { patientUpdateProfile } from '../api/Api';
//import OTImagePicker from '../components/OTImagepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

export default function UserUpdateProfile({navigation}) {
  const refRBSheet = useRef();

  const problems = [
    { label: 'Fever', value: 'Fever' },
    { label: 'Cough', value: 'Cough' },
    { label: 'Headache', value: 'Headache' },
    { label: 'Sore Throat', value: 'Sore Throat' },
    { label: 'Nausea', value: 'Nausea' },
    { label: 'Fatigue', value: 'Fatigue' },
    { label: 'Diarrhea', value: 'Diarrhea' },
    { label: 'Shortness of Breath', value: 'Shortness of Breath' },
    { label: 'Muscle Pain', value: 'Muscle Pain' },
    { label: 'Loss of Taste or Smell', value: 'Loss of Taste or Smell' },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [items, setItems] = useState(problems);
console.log('items==========>',selectedProblems)
 
const [selectedImage, setSelectedImage] = useState(null);
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [age,setAge]=useState()
  const [state,setState]=useState()
  const [city,setCity]=useState()
  const [area,setArea]=useState()
  const [gender,setGender]=useState()
  const [bloodGroup,setBloodGroup]=useState()
  const [sheetType, setSheetType] = useState('');
  const genders = ['Male', 'Female', 'Other'];
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
 
  
 


  // const handleSelectImage = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     maxWidth: 300,
  //     maxHeight: 300,
  //     quality: 1,
  //   };

  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //       Alert.alert('Error', 'Something went wrong while selecting the image.');
  //     } else {
  //       const uri = response.assets[0].uri;
  //       console.log('uriresponse=========>',uri)
  //       setSelectedImage(uri);
       
  //     }
  //   });
  // };

  // const handlePhoneNumberChange = (value) => {
  //   setPhoneNumber(value);
  // };

  // const handleFormattedPhoneNumberChange = (text) => {
  //   setFormattedPhoneNumber(text);
  // };

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
  
    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        console.log('uriresponse=========>', uri);
  
        try {
          const base64Image = await convertImageToBase64(uri);
          console.log('base64=========', base64Image)
          setSelectedImage(base64Image);
        } catch (error) {
          console.error('Error converting image to base64: ', error);
        }
      }
    });
  };
  
  const convertImageToBase64 = async (uri) => {
    try {
      const base64 = await RNFS.readFile(uri, 'base64');
      console.log('base====',base64)
      return base64;
    } catch (error) {
      throw error;
    }
  };
  

  const handleSelectImages = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log('Selected image:', image);
      const base64Image = `data:${image.mime};base64,${image.data}`;
      console.log('base6444444444====================>',base64Image)
      setSelectedImage(base64Image);
    }).catch(error => {
      console.log('ImagePicker Error: ', error);
      Alert.alert('Error', 'Something went wrong while selecting the image.');
    });
  };



  const openBottomSheet = (type) => {
    setSheetType(type);
    refRBSheet.current.open();
  };

  const renderBottomSheetContent = () => {
    switch (sheetType) {
      case 'firstName':
        return (
          <View>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your firstname?</Text>
          <View style={styles.bottomSheetContent}>
            <Textinputcom
              onChangeText={(firstName) => setFirstName(firstName)}
              value={firstName}
              placeholder='Enter your firstname'
              keyboardType={"text"}
             placeholderTextColor={'grey'}
            />
          </View>
          </View>
        );
        case 'lastName':
          return (
            <View>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your area?</Text>
            <View style={styles.bottomSheetContent}>
              <Textinputcom
                onChangeText={(lastName) => setLastName(lastName)}
                value={lastName}
                placeholder='Enter your lastname'
                keyboardType={"text"}
                placeholderTextColor={'grey'}
              />
            </View>
            </View>
          );
      case 'gender':
        return (
          <View>
           <Text style={{color:'white',fontSize:20,marginHorizontal:10,fontWeight:'bold'}}>What is your gender?</Text>
          <View style={styles.bottomSheetContent}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>Which gender do you identify with?</Text>
          <ButtonGroup
                buttons={genders}
                selectedIndex={genders.indexOf(gender)}
                onPress={(index) => {
                  setGender(genders[index]);
                  refRBSheet.current.close();
                }}
              />
          </View>
           </View>
        );
        case 'age':
          return (
            <View>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your age?</Text>
            <View style={styles.bottomSheetContent}>
              <Textinputcom
                onChangeText={(age) => setAge(age)}
                value={age}
                placeholder='Enter your agee'
                keyboardType={"numeric"}
                placeholderTextColor={'grey'}
              />
            </View>
            </View>
          );
      case 'area':
        return (
          <View>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your area?</Text>
        
          <View style={styles.bottomSheetContent}>
           
            <Textinputcom
              onChangeText={(area) => setArea(area)}
              value={area}
              placeholder='Enter your area'
              keyboardType={"text"}
              placeholderTextColor={'grey'}
            />
          </View>
          </View>
        );
      case 'city':
        return (
          <View>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your city?</Text>
        
          <View style={styles.bottomSheetContent}>
          
            <Textinputcom
              onChangeText={(city) => setCity(city)}
              value={city}
              placeholder='Enter your city'
              keyboardType={"text"}
              placeholderTextColor={'grey'}
            />
              </View>
          </View>
        );
        case 'state':
          return (
            <View>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:20}}>What is your city?</Text>
          
            <View style={styles.bottomSheetContent}>
            
              <Textinputcom
                onChangeText={(state) => setState(state)}
                value={state}
                placeholder='Enter your state'
                keyboardType={"text"}
                placeholderTextColor={'grey'}
              />
                </View>
            </View>
          );
       case 'patientcondition':
       return(
        <View style={{flex:1}}>
<DropDownPicker
        open={open}
        value={selectedProblems}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedProblems}
        setItems={setItems}
        multiple={true}
        min={0}
        max={10}
        placeholder="Select your problems"
        containerStyle={{ marginBottom: 20 ,flex:1}}
      />
      </View>
       )
      
         
      case 'bloodGroup':
        return (
          <View>
             <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:10}}>What is your blood group?</Text>

          <View style={styles.bottomSheetContent}>
          <ButtonGroup
                buttons={bloodGroups}
                selectedIndex={bloodGroups.indexOf(bloodGroup)}
                onPress={(index) => {
                  setBloodGroup(bloodGroups[index]);
                  refRBSheet.current.close();
                }}
              />
          </View>
                    </View>
         
        );
      
      default:
        return null;
    }
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (date) => {
    setDateOfBirth(date);
    closeDatePicker();
  };

  return (
    <View style={{flex:1,}}>
      <Headercom onPress={()=>navigation.goBack()} title={'User profile'}/>
    
    <View style={{  paddingTop:10}}>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <Text style={{color:'grey'}}>Name</Text>
        <TouchableOpacity onPress={handleSelectImages}  style={{ borderRadius: 25, width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', borderWidth: 1 ,color:'grey'}}>
  {selectedImage ? (
    <View style={styles.selectedImageContainer}>
      <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
    </View>
  ) : (
    <Text style={{ alignItems: 'center', fontSize: 9, color: 'grey', justifyContent: 'center' }}>Select image</Text>
  )}
</TouchableOpacity>
      </View>
      <Divider   style={{marginVertical:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('firstName')}>
        <Text style={{color:'grey'}}>First Name</Text>
        <Text style={{color:'grey'}}>{firstName}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('lastName')}>
        <Text style={{color:'grey'}}>Last Name</Text>
        <Text style={{color:'grey'}}>{lastName}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('gender')}>
        <Text style={{color:'grey'}}>Gender</Text>
        <Text style={{color:'grey'}}>{gender}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('age')}>
        <Text style={{color:'grey'}}>Age</Text>
        <Text style={{color:'grey'}}>{age}</Text>
      </TouchableOpacity>
    
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('bloodGroup')}>
        <Text style={{color:'grey'}}>Blood Group</Text>
        <Text style={{color:'grey'}}>{bloodGroup}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('patientcondition')}>
        <Text style={{color:'grey'}}>Patient Condition</Text>
        <Text style={{color:'grey'}}>{selectedProblems}</Text>
      </TouchableOpacity>
      
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('area')}>
        <Text style={{color:'grey'}}>Area</Text>
        <Text style={{color:'grey'}}>{area}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('city')}>
        <Text style={{color:'grey'}}>City</Text>
        <Text style={{color:'grey'}}>{city}</Text>
      </TouchableOpacity>
      <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
      <TouchableOpacity style={styles.row} onPress={() => openBottomSheet('state')}>
        <Text style={{color:'grey'}}>State</Text>
        <Text style={{color:'grey'}}>{state}</Text>
      </TouchableOpacity>
      {/* <CustomDatepicker
        open={showDatePicker}
        date={dateOfBirth}
        onCancel={closeDatePicker}
        onConfirm={handleDateChange}
        mode="date"
      /> */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        useNativeDriver={true}
        //height={700}
        // dragOnContent={true}
        
        //draggable={true}
       
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: "white"
          },
          container: {height:200, borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor:'#065E86'},
        }}
      >
        <View style={{alignItems:'flex-end',justifyContent:'flex-end',padding:20}}>
         <MaterialIcons  name="close" size={22} color='white' onPress={()=>refRBSheet.current.close()}/>
         </View>
        {renderBottomSheetContent()}
      </RBSheet>
      <TouchableOpacity style={styles.button} onPress={()=>patientUpdateProfile(
        firstName,lastName,age,area,selectedImage,city,state,bloodGroup,
        selectedProblems,gender
      )}>
      <Text style={{color:'white'}}>{title='Submit'}</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedImageContainer: {
    alignItems: 'center',
   
    width:50,height:50
  },
  selectedImageText: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedImage: {
    width: 50,
    height: 50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    
    borderBottomColor: '#ccc',

  },
  phoneInputContainer: {
    color: 'grey',
    flex: 1, // Adjust as needed
    
  },
  bottomSheetContent:{
flex:1,

  },
  containerNumberStyle:{
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10,
color:'grey',
marginHorizontal:30
  },
  phoneInputContainer: {
    width: 350, // Adjust as needed
    //marginBottom: 20,
  },
  button: {
    backgroundColor: "#065E86",
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    marginHorizontal:30,
    marginVertical:60
  },
  message: {
    // marginTop: 20,
  },
  input: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
backgroundColor:'white',
marginHorizontal:20,
marginVertical:60,

  },
  
});
