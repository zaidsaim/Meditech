import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Textinput from '../components/OTInput';
import Button from '../components/OTButton';
import { ScrollView } from 'react-native-gesture-handler';
import Headercom from '../components/headercom';
import { TouchableOpacity } from 'react-native';

const CreateDoctorProfile = ({navigation}) => {
  const [name, setName] = useState();
  const [specialization, setSpecialization] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();
  const [clinic, setClinic] = useState();
  const [consultationFee, setConsultationFee] = useState();
  const [availability, setAvailability] = useState();
  const [bio, setBio] = useState();

  return (
    <ScrollView>
      <Headercom onPress={()=>navigation.goBack()} title={'Doctor profile'}/>
    <View style={styles.container}>
      {/* <Image source={{ uri: doctor.profilePicture }} style={styles.profilePicture} /> */}
      <TouchableOpacity onPress={()=>navigation.navigate('UpdateDoctorProfile')} style={{width:60,height:60,borderRadius:40,borderWidth:1,borderColor:'grey',justifyContent:'center'}}>
        <Text style={{color:'grey',fontSize:10,marginHorizontal:5}}>Edit Pofile</Text>
      </TouchableOpacity>
      <Textinput
        style={styles.input}
        value={name}
        onChangeText={(value)=>setName(value)}
        placeholder="Doctor's Name"
      />
      <Textinput
          keyboardType={'letter'}
        value={specialization}
        onChangeText={(value)=>setSpecialization(value)}
        placeholder={"Specialization"}
      />
      <Textinput
          keyboardType={'numeric'}
        value={experience}
        onChangeText={(value)=>setExperience(value)}
        placeholder={"Experience (in years)"}
      />
      <Textinput
          keyboardType={'letter'}
        value={education}
        onChangeText={(value)=>setEducation(value)}
        placeholder={"Education"}
      />
      <Textinput
      keyboardType={'letter'}
        value={clinic}
        onChangeText={(value)=>setClinic(value)}
        placeholder={"Clinic/Hospital"}
      />
      <Textinput
        value={consultationFee}
        onChangeText={(value)=>setConsultationFee(value)}
        placeholder={"Consultation Fee"}
        keyboardType={"letter"}
      />
      <Textinput
        value={availability}
        onChangeText={(value)=>setAvailability(value)}
        placeholder={"Availability"}
        keyboardType={'letter'}
      />
      <Textinput
        value={bio}
        onChangeText={(value)=>setBio(value)}
        placeholder={"Bio/Description"}
        multiline={true}
        keyboardType={'letter'}
      />
      
    </View>
    <Button title={'Submit'} style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top', // To make the text input expand vertically
  },
  button: {
    backgroundColor: '#2fbd68', // Custom color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width:'90%',
    marginHorizontal:20,
    alignItems:'center'
  },
});

export default CreateDoctorProfile;
