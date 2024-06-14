import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, {useState,useMemo,useRef,} from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import { ScrollView } from 'react-native';
import { Divider } from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioGroup from 'react-native-radio-buttons-group';
import CCTextinput from '../../commonComponents/CCTextinput';
export default function BookClinicAppointment() {
  const refRBSheet = useRef();
  const [sheetType, setSheetType] = useState(null);
  const [patientSheetType,setPatientSheetType]=useState(null)
  const [fullname,setFullname]=useState()
  const [mobilenumber,setMobilenumber]=useState()
  const [email,setEmail]=useState()
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Pay Online',
        value: 'Pay Online',
        color:'#065E86'
    },
    {
        id: '2',
        label: 'Pay at Clinic',
        value: 'Pay at Clinic',
        color:'#065E86'
    }
]), []);

function renderAddPatientDetaaisSheet(){
  return(
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,padding:10}}>
      <MaterialIcons name="close" size={20} color="grey"  />
        <Text style={{color:'black',fontWeight:'bold'}}>Edit Patient Details</Text>
      </View>
<CCTextinput
label={'Patients Full Name'}
value={fullname}
onChangeText={(fullname)=>setFullname(fullname)}
mode={'outlined'}
/>
<CCTextinput
label={'Mobile'}
value={fullname}
onChangeText={(fullname)=>setFullname(fullname)}
mode={'outlined'}
/>
<CCTextinput
label={'Your Email'}
value={fullname}
onChangeText={(fullname)=>setFullname(fullname)}
mode={'outlined'}
/>
<View >
  <Text style={{color:'white'}}>Confirm</Text>
</View>
</View>
  )
}

const openPtientDetailsSheet = (type) => {
  setPatientSheetType(type);
  refRBSheet.current.open();
};

function renderBottomSheetContent(){
  return(
    <View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:20}}>
      <MaterialIcons name="close" size={24} color="grey" onPress={()=>refRBSheet.current.close()} />
        <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Select a Patient</Text>
      </View>
      <View style={{flexDirection:'row',padding:10,alignItems:'center',borderWidth:1,borderColor:'grey',marginHorizontal:20}}>
        <View style={{backgroundColor:'black',width:30,height:30,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white'}}>Z</Text>
        </View>
        <View style={{padding:10}}>
        <Text  style={{color:'black'}}>Zaid</Text>
        <Text style={{color:'black'}}>Myself</Text>
        <Text style={{color:'black'}}>+916397688464</Text>
        </View>
      </View>
      <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10,marginHorizontal:10,}}>
        <TouchableOpacity style={{backgroundColor:'black',borderWidth:1,borderColor:'black',alignItems:'center',padding:10,width:'40%'}}>
        <Text style={{color:'white'}}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'black',borderWidth:1,borderColor:'black',alignItems:'center',padding:10,width:'40%'}}>
        <Text  style={{color:'white'}}>SELECT</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>openPtientDetailsSheet('edit patient details')} style={{marginTop:20,borderWidth:1,borderColor:'black',padding:10,width:'90%',marginHorizontal:20,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'black'}}>+Add New Patient</Text>
      </TouchableOpacity>
    </View>
  )
}

const openBottomSheet = (type) => {
  setSheetType(type);
  refRBSheet.current.open();
};


const [selectedId, setSelectedId] = useState()
  return (
    <ScrollView style={{flex:1}}>
    <View style={{flexDirection:'row',padding:10,backgroundColor:'white'}}>
    <View>
    <Image source={{uri:'https://www.shutterstock.com/shutterstock/photos/1635029716/display_1500/stock-photo-medical-concept-of-indian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up-medical-1635029716.jpg'}} style={{width:100,height:100,borderRadius:100}}/>
  </View>
    <View style={{marginHorizontal:20}}>
  <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Dr. Venkatesh MJ</Text>
  <View style={{}}>
  <Text style={{color:'black',fontSize:12,paddingTop:5}}>Orthodonist, Cosmetic/Aes..</Text>
  <Text style={{color:'black',fontSize:12,paddingTop:5}}>BDS, MDS-Orthodontics</Text>
  <View style={{flexDirection:'row',alignItems:'center',}}>
    <View style={{alignItems:'center'}}>
    <View style={{flexDirection:'row',alignItems:'center',paddingTop:5}}>
    <MaterialIcons name="thumb-up" size={20} color="green"  />
     <Text  style={{color:'grey',fontSize:12,marginHorizontal:10}}>89%</Text>
</View>
</View>
    <View style={{alignItems:'center',justifyContent:'center',}}>
    <View style={{alignItems:'center',flexDirection:'row',paddingTop:5}}>
    <MaterialIcons name="star" size={20} color="green"  />
        <Text  style={{color:'grey',marginHorizontal:10,fontSize:12}}>4.4/5</Text>
        </View>
   </View>
   </View>
   <View style={{alignItems:'center',flexDirection:'row',paddingTop:5}}>
    <MaterialIcons name="beenhere" size={18} color="grey"  />
        <Text  style={{color:'grey',marginHorizontal:5,fontSize:12}}>Highly recommended for doctor</Text>
        </View>
  </View>
  </View>
  </View>
  <View style={{backgroundColor:'white',padding:10,marginVertical:10}}>
 
   <View style={{padding:10}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <MaterialIcons name="schedule" size={20} color="grey"  />
    <Text  style={{color:'grey',fontSize:14,marginHorizontal:10}}>Appointment Time</Text>
    </View>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
  <Text  style={{color:'black',fontSize:16}}>Tue, 28 may 02:00 pm</Text>
  <Text style={{fontSize:20,color:'grey',marginLeft:5}}>|</Text>
    <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:5}}>
    <MaterialIcons name="schedule" size={16} color="grey"  />
    <Text  style={{color:'black',fontSize:12,marginLeft:2}}>in 2 hours and 8 minutes</Text>
    </View>
    
  </View>
  
  </View>
  </View>
  <View style={{backgroundColor:'white',padding:10}}>
    <View style={{marginHorizontal:10}}>
    <View style={{flexDirection:'row',alignItems:'center',}}>
    <MaterialIcons name="home" size={18} color="grey"  />
    <Text  style={{color:'grey',fontSize:16,marginHorizontal:10,fontWeight:'400'}}>Clinic Details</Text>
    </View>
<View style={{padding:5}}>
    <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Orthodonist, Cosmetic/Aes..</Text>
    <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Orthodonist, Cosmetic/Aes..</Text>
    <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Orthodonist, Cosmetic/Aes..</Text>
    <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Orthodonist, Cosmetic/Aes..</Text>
    </View>
    </View>
    <Divider style={{marginHorizontal:20,marginTop:10}}/> 
    <View style={{flexDirection:'row',alignItems:'center',padding:15,justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
    <MaterialIcons name="security" size={18} color="grey"  />
    <Text  style={{color:'#065E86',fontSize:14,marginHorizontal:5}}>Healthcare promise</Text>
    </View>
    <Text  style={{color:'black',fontSize:14,fontWeight:'600'}}> Appointment confirmed</Text>
    </View>
    </View>
    
    <View style={{padding:10,backgroundColor:'white',marginVertical:10}}>
      <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginHorizontal:10}}>
        Choose a mode of payment
      </Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            labelStyle={{color:'black',alignItems:'center',fontSize:16}}
            
            
        />
       
        <View style={{}}>
          <Text style={{color:'black',fontSize:16,}}>$300</Text>
          <Text style={{color:'black',fontSize:16,marginVertical:10}}>$300</Text>
        </View>
        </View>
    </View>
    <View style={{backgroundColor:'white',padding:10}}>
    <View style={{backgroundColor:'white',marginVertical:10,padding:10,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'grey',justifyContent:'space-between',marginHorizontal:10}}>
    <View style={{flexDirection:'row',alignItems:'center'}}> 
    <MaterialIcons name="verified" size={30} color="#065E86"  />
    <View style={{marginHorizontal:10,}}>
    <Text  style={{color:'black',fontSize:16,}}>Apply Coupon</Text>
    <Text  style={{color:'grey',fontSize:14,}}> Unlock oofers with coupon</Text>
    </View>
    </View>
    <Text  style={{color:'black',fontSize:16,}}>APPLY</Text>
    </View>
    <Text style={{color:'black',fontSize:16,padding:10,fontWeight:'bold'}}>Bill Details</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text  style={{color:'grey',fontSize:16,}}>Consultant Fee</Text>
    <Text  style={{color:'grey',fontSize:16,}}>4700</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text  style={{color:'grey',fontSize:16,}}>Service Fee & Tax</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text  style={{color:'grey',fontSize:16,marginHorizontal:10}}>49$</Text>
    <Text  style={{color:'green',fontSize:12,}}>FREE</Text>
    </View>
    </View>
    
    <Text style={{color:'green',padding:10}}>We care of you & provide for free booking</Text>
    <Divider style={{marginHorizontal:20,marginVertical:10}}/>
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
      <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Total Paybale</Text>
      <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>$700</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15,borderColor:'green',borderWidth:1,marginHorizontal:10,}}>
    <Text  style={{color:'green',fontSize:14,}}>You have saved 49 on this appointment</Text>
    <Text  style={{color:'green',fontSize:14,}}>4700</Text>
    </View>
    </View>
    <View style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white',borderWidth:1,borderColor:'#065E86',marginHorizontal:20,marginVertical:20}}>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#065E86',padding:10}}>
    <MaterialIcons name="check-circle" size={24} color="white"  />
    <Text  style={{color:'white',fontSize:16,marginHorizontal:10}}> Healthcare promise</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
    <MaterialIcons name="check" size={16} color="#065E86"  />
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>Appointment confirmed instantly with doctor</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
    <MaterialIcons name="check" size={16} color="#065E86"  />
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}> We assure we will  connect doctor </Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
    <MaterialIcons name="check" size={16} color="#065E86"  />
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>24/7 live chat support to address all</Text>
    </View>
    </View>
    </View>
    <View style={{backgroundColor:'white',marginTop:10}}>
    <View style={{flexDirection:'row',alignItems:'center',padding:10,marginTop:10,backgroundColor:'#065E86',marginHorizontal:20,marginBottom:10}}>
    <MaterialIcons name="verified-user" size={16} color="white"  />
    <Text  style={{color:'white',fontSize:14,marginHorizontal:10}}>Safe Visit</Text>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:10,marginVertical:10}}>
      <Text style={{color:'black',padding:10,fontSize:16,fontWeight:'bold'}}>
        Safety measures followed by Clinic
      </Text>
      <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
    <View style={{backgroundColor:'black',borderRadius:10,padding:5}}/>
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>24/7 live chat support to address all</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
    <View style={{backgroundColor:'black',borderRadius:10,padding:5}}/>
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>24/7 live chat support to address all</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
    <View style={{backgroundColor:'black',borderRadius:10,padding:5}}/>
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>24/7 live chat support to address all</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
    <View style={{backgroundColor:'black',borderRadius:10,padding:5}}/>
    <Text  style={{color:'black',fontSize:14,marginHorizontal:10}}>24/7 live chat support to address all</Text>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:10,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10,}}>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#065E86',width:30,height:30,borderRadius:20,justifyContent:'center'}}>
    <MaterialIcons name="home" size={14} color="white"  />
    </View>
    <Text  style={{color:'black',fontSize:16,marginHorizontal:10}}>Get notification on watsup</Text>
<Image style={{width:20,height:20}} source={{uri:'https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png'}}/>
</View>
    <View style={{padding:10}}>
    <Text style={{color:'grey'}}>* Updates will be sent on +6397688464</Text>
    <Text style={{color:'grey'}}>* By booking the appointment , you agree to healthcare</Text>
    <Text style={{color:'grey'}}>* Terms and ocondition you can also Pre-pay for</Text>
    <Text style={{color:'grey'}}>* This appointment pay online option</Text>
    </View>
    </View>
    <View style={{padding:10}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
      <View style={{justifyContent:'center',backgroundColor:'black',height:50,width:50,borderRadius:25,alignItems:'center',marginHorizontal:10}}>
        <Text style={{color:'white'}}>z</Text>
      </View>
      <View style={{}}>
        <Text style={{color:'grey'}}>In-Clinic Appoinment for</Text>
        <Text style={{color:'black'}}>Zaid</Text>
      </View>
      <TouchableOpacity onPress={()=>openBottomSheet('select patient')}>
      <Text style={{color:'#065E86',padding:10,fontSize:16}}>CHANGE</Text>
      </TouchableOpacity>
      <RBSheet ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={true}
    
    height={350}
    //#F0F0F0
    customStyles={{
      wrapper: {
        backgroundColor: "transparent"
      },
      draggableIcon: {
        backgroundColor: "#000",
        closeOnDragDown:'true'
      },
      container:{borderTopRightRadius:30,borderTopLeftRadius:20,},
     
    }}>
     {renderBottomSheetContent()}
   </RBSheet>
   <RBSheet ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={true}
    
    height={450}
    //#F0F0F0
    customStyles={{
      wrapper: {
        backgroundColor: "transparent"
      },
      draggableIcon: {
        backgroundColor: "#000",
        closeOnDragDown:'true'
      },
      container:{borderTopRightRadius:30,borderTopLeftRadius:20,},
     
    }}>
     {renderAddPatientDetaaisSheet()}
   </RBSheet>
      <View>
      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'white',marginTop:10}}>
      

      <View style={{marginTop:10}}>
    <Text style={{color:'black'}}>
          700
        </Text>
        <Text style={{color:'black'}}>
          
          View Bill
        </Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#065E86',padding:15,borderRadius:5}}>
          <Text style={{color:'white'}}>Confirmed Clinic Visit</Text>
        </TouchableOpacity>
        </View>
        </View>
  </ScrollView >
    
  )
}