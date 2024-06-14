import { View, Text,Image, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from "react-native-animated-progress";
export default function Taskpage() {
  return (
    <>
    <View style={{backgroundColor:'#16588e',flex:1}}>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <View style={{padding:10,flexDirection:'row'}}>
        <Image source={require('../asset/logo-white.png')} style={{width:40,height:40,color:'white'}}/>  
        <View style={{}}>
      <Text style={{color:'white',paddingTop:10,fontSize:30,marginHorizontal:10}}>tat d</Text>
      <Text style={{color:'white',fontSize:8,justifyContent:'flex-start'}}>family k liye driver</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10,flexDirection:'row',backgroundColor:'white',borderRadius:30,padding:2,alignItems:'center',width:'50%',justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#16588e',borderRadius:30,padding:5,alignItems:'center',paddingHorizontal:10}}>
            <Text style={{color:'white',}}>Customer</Text>
        </View>
        <Text style={{color:'grey',marginHorizontal:5,fontSize:12,marginHorizontal:10}}>PARTNER</Text>
      </View>
    </View>

    



    <ScrollView style={{marginBottom:50}}>
    <View style={{backgroundColor:'white',marginHorizontal:15,marginVertical:20}}>
        <View style={{alignItems:'center',padding:10}}>
        <Text style={{color:'black',fontSize:16,fontWeight:'bold',alignItems:'center'}}>I Require ?</Text>
        </View>
        <Divider style={{marginHorizontal:'5%',color:'grey'}}/>
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:20}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/driver.png')} style={{width:30,height:30}}/>
        <Text style={{color:'grey',fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Driver</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/ro.png')} style={{width:30,height:30}}/>
        <Text style={{color:'grey',fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Ro</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/taxi.png')} style={{width:30,height:30}}/>
        <Text style={{color:'grey',fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Taxi</Text>
        </View>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:20}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/courier.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Courier</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/maid.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Maid</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/ac.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>AC</Text>
        </View>
       
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:20}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/plumber.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Plumber</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:10}}>
        <Image source={require('../asset/electrician.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Electric</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/carpainter.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Carpenter</Text>
        </View>
        
        </View>
        <View style={{flexDirection:'row',padding:20}}>
            <View style={{alignItems:'center',marginHorizontal:30,justifyContent:'center'}}>
        <Image source={require('../asset/painter.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Painter</Text>
        </View>
        <View style={{alignItems:'center',marginHorizontal:30,justifyContent:'center'}}>
        <Image source={require('../asset/cook.png')} style={{width:30,height:30}}/>
        <Text style={{fontSize:12,color:'black',marginVertical:5,fontWeight:'400'}}>Cook</Text>
        </View>
        </View>
    </View>

    <View style={{borderWidth:1,borderColor:'white',marginHorizontal:20,}}>
            <View style={{backgroundColor:'white',margin:20,flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{marginHorizontal:10,marginVertical:10}}>
                <Text style={{color:'#ff8b00',fontSize:70,fontWeight:'900'}}>
                 5%
                </Text>
                <View style={{flexDirection:'row',backgroundColor:'#ff8b00',borderRadius:5,padding:7,alignItems:'center',marginVertical:10,justifyContent:'center'}}>
                    <Text style={{color:'white',marginHorizontal:5}}>
                        Refer & Earn
                    </Text>
                    <MaterialIcons  name="east" size={20} color='white' style={{fontWeight:'bold',}} />
                </View>
                </View>
                <View style={{paddingHorizontal:10}}>
                <Image source={require('../asset/refer-earn.png')} style={{width:80,height:80,marginVertical:5,marginHorizontal:20}}/>  
                <Text style={{color:'black',fontWeight:'bold'}}>Get 5% back Each</Text>
                <Text style={{color:'black'}}>time your friend</Text>
                <Text style={{color:'black'}}>initiate and booking</Text>
                <Text style={{color:'black'}}>with us</Text>
                <View style={{marginTop:10,marginBottom:10,width:'75%'}}>
                <Text style={{color:'grey',borderBottomWidth:1,color:'grey',}}>How it works?</Text>
                </View>
                </View>
            </View>
        </View>

<View style={{backgroundColor:'#16588e',borderWidth:1,borderColor:'white',margin:20}}>
        <View style={{backgroundColor:'white',borderRadius:3}}>

        <View style={{alignItems:'center',padding:10}}>
        <Text style={{color:'black',}}>Our drivers are briefed about the importance of</Text>
        <Text style={{color:'black',}}>Our drivers are briefed about the importance of</Text>
        <Text style={{color:'black',}}>Our drivers are briefed about the importance of</Text>
        <View>
        <Text style={{color:'black',}}>Our drivers are briefed about the importance of</Text>
        
        <Text style={{color:'black',fontSize:14,fontWeight:'bold',marginVertical:10}}>Expert Driving Experience</Text>
        </View>
        </View>
        </View>
        <Divider style={{marginHorizontal:'20%'}}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
            <View style={{alignItems:'center',}}>
                <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/maskblueicon.png')} style={{width:20,height:20}}/>
        
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Safe</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/verifiedblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Trained</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/driver.png')} style={{width:20,height:20,color:'blue'}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Experienced</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/punctualblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Punctual</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
            <View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/openblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>24*7/Services</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/presenceblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Presence</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/convenientblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>Convenient</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'white',borderRadius:25,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../asset/howitblueicon.png')} style={{width:20,height:20}}/>
        </View>
        <Text style={{color:'white',fontSize:10,marginVertical:5}}>How it Works</Text>
        </View>
        </View>

      
     </View>
     <View style={{backgroundColor:'white'}}> 
    <View style={{backgroundColor:'#d9d9d9',marginVertical:20,marginHorizontal:15}}>
        <View>
            <Text style={{color:'black',fontSize:16,fontWeight:'bold',padding:10}}>
                Rating and Reviews,
            </Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{padding:10}}>
            <Text style={{color:'black',fontSize:40,}}>4.8</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star-half" size={14} color='#16588e' />
            </View>
            <Text style={{color:'black',}}>401351</Text>
            </View>
            <View style={{padding:5,flex:1 ,}}>
                <View style={{flexDirection:'row'}}>
                     <Text style={{ color:'#16588e' }}>
          5
        </Text>
              
            <View style={{padding:5,flex:1 }}>
            <ProgressBar progress={30}
          height={7}
          backgroundColor="#16588e"
          animated={false}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
                     <Text style={{ color:'#16588e' }}>
          4
        </Text>
              
            <View style={{padding:5,flex:1 }}>
            <ProgressBar progress={25}
          height={7}
          backgroundColor="#16588e"
          animated={false}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
                     <Text style={{ color:'#16588e' }}>
          3
        </Text>
              
            <View style={{padding:5,flex:1 }}>
            <ProgressBar progress={20}
          height={7}
          backgroundColor="#16588e"
          animated={false}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
                     <Text style={{ color:'#16588e' }}>
          2
        </Text>
              
            <View style={{padding:5,flex:1 }}>
            <ProgressBar progress={15}
          height={7}
          backgroundColor="#16588e"
          animated={false}/>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
                     <Text style={{ color:'#16588e' }}>
          1
        </Text>
              
            <View style={{padding:5,flex:1 }}>
            <ProgressBar progress={10}
          height={7}
          backgroundColor="#16588e"
          animated={false}/>
            </View>
            </View>
           
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',}}>
                <View style={{backgroundColor:'#16588e',borderRadius:20,width:40,height:40,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>G</Text>
                </View>
               
                <Text style={{color:'black',marginHorizontal:20,fontSize:16}}>Shivraj Parab</Text>
            </View>
            <View>
                <Text style={{color:'black',fontSize:16}}>Pune</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',padding:10,alignItems:'center',}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
            <MaterialIcons  name="star" size={14} color='#16588e' />
                <Text style={{color:'black',marginHorizontal:10}}>28 May, 2024</Text>
            </View>
        </View>
        <View style={{padding:10}}>
        <Text style={{color:'black',}}>Imran was an extremly courteuos person and </Text>
        <Text style={{color:'black',}}>excellent driver</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',margin:20}}>
            <Text style={{color:'#16588e'}}>See more reviews</Text>
            <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15,marginHorizontal:5}}/>
        </View>
    </View>
    </View> 
    <View style={{backgroundColor:'#16588e'}}>
        <View style={{backgroundColor:'white',marginVertical:20,marginHorizontal:10,padding:10}}>
            <Text style={{color:'black',padding:10}}>
             Coming Soon
            </Text>
            <Divider style={{marginHorizontal:'5%'}}/>
            <View style={{padding:10,}}>
            <Image source={require('../asset/mechanic.png')} style={{width:40,height:40,marginHorizontal:10}}/>
                <Text style={{color:'black',marginHorizontal:10,marginVertical:5}}>Mechanic</Text>
            </View>
        </View>
    </View>

    <View style={{backgroundColor:'white'}}>
        <View style={styles.card}>
            <View style={{}}>
            <Text style={{color:'grey'}}>" I just want to share my first experience of driver"</Text>
            <Text style={{color:'grey'}}>on demand, it was unexpectedly very good. Team</Text>
            <Text style={{color:'grey'}}>was punchual, sensible, understanding the</Text>
            <Text style={{color:'grey'}}>requirment and very cooperative. Driver sent to me</Text>
            <Text style={{color:'grey'}}>norms. I will definitely like to recommend your</Text>
            <Text style={{color:'grey'}}>service for those who require traned and trusted</Text>
            <Text style={{color:'grey'}}>driver on occassional and hourly basis . Goog job</Text>
            <Text style={{color:'grey'}}>and keep and doing good work</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
        <Image source={require('../asset/doctor.png')} style={{}}/>
        <View>
                <Text style={{color:'black'}}>Dr. Saurabh Vashishtha</Text>
                <Text style={{color:'grey'}}>Manipal Hospitals</Text>
                </View>
        </View>
        </View>
        </View>
      
       
    </View>

    <View style={{backgroundColor:'#16588e',flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View style={{padding:10,marginVertical:20}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Contact Us</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
                
                <Image source={require('../asset/logo-white.png')} style={{width:10,height:10}}/>
                <Text style={{color:'white',marginHorizontal:5,fontSize:12}}>
                    Support@tald.in
                </Text>
            </View>
            <View  style={{flexDirection:'row',alignItems:'center',}}>
                
                <Image source={require('../asset/openicon.png')} style={{width:10,height:10}}/>
                <Text style={{color:'white',marginHorizontal:5,fontSize:12}}>
                    +91 9999160322
                </Text>
            </View>
            <View  style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
                
                <Image source={require('../asset/punctualicon.png')} style={{width:10,height:10}}/>
                <Text style={{color:'white',marginHorizontal:5,fontSize:12}}>
                    Office No G-39
                </Text>
            </View>
            <View style={{}}>
            <Text style={{color:'white',fontSize:12}}>
                Vardhman Grand Market,
            </Text>
            <Text style={{color:'white',fontSize:12}}>Sector 3, dWARKA, New</Text>
            <Text style={{color:'white',fontSize:12}}>Delhi- 110078</Text>
            <Text style={{color:'white',fontSize:12}}>Execusion Force Private</Text>
            <Text style={{color:'white',fontSize:12}}>Limited</Text>
                        <Text style={{color:'white',marginTop:20,fontWeight:'500',fontSize:14}}>Follow Us</Text>
                        
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
            <Image source={require('../asset/facebook.png')} style={{width:40,height:40}}/>
            <Image source={require('../asset/instagram.png')} style={{width:40,height:40,marginHorizontal:5}}/>
            <Image source={require('../asset/linkedin.png')} style={{width:40,height:40}}/>
        </View>
        </View>
        <View style={{marginVertical:30,marginLeft:30}}>
            <View style={{width:'70%',backgroundColor:'white',borderRadius:2,flexDirection:'row',padding:8,justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{color:'#16588e',fontSize:10}}>Make an Enquiry</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
 <View style={{width:'70%',backgroundColor:'white',flexDirection:'row',marginVertical:10,padding:8,borderRadius:2,justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{color:'#16588e',fontSize:10}}>Cancel My Booking</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
             <View style={{width:'70%',backgroundColor:'white',flexDirection:'row',padding:8,borderRadius:2,justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{color:'#16588e',fontSize:10}}>My Weekly Schedule</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
             <View style={{width:'70%',backgroundColor:'white',flexDirection:'row',marginVertical:10,padding:8,borderRadius:2,justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{color:'#16588e',fontSize:10}}>Download Invoice</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
             <View style={{width:'70%',backgroundColor:'white',flexDirection:'row',padding:8,borderRadius:2,justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{color:'#16588e',fontSize:10}}>My Feedback</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
             <View style={{width:'70%',backgroundColor:'white',flexDirection:'row',padding:8,borderRadius:2,marginVertical:10,justifyContent:'space-between',alignItems:'center',}}>
              <Text style={{color:'#16588e',fontSize:10}}>About Us</Text>  
               <Image source={require('../asset/arrow-right-tatd.png')} style={{width:15,height:15}}/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:5}}>
            <Text style={{fontSize:9,color:'white'}}>Terms & Conditions</Text>
            <Text style={{fontSize:14,color:'white',marginHorizontal:5}}>|</Text>
            <Text style={{fontSize:9,color:'white'}}>Privacy Policy</Text>
            </View>
           
        </View>
    </View>

    <View style={{backgroundColor:'#ff8b00',borderRadius:5,justifyContent:'center',alignItems:'center',padding:10,marginHorizontal:'30%',borderRadius:10,marginTop:30}}>
        <Text style={{color:'white',}}>Applly for Driver job</Text>
    </View>
   <View style={{margin:20}}>
        <View style={{padding:10,backgroundColor:'#ffd8aa',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image source={require('../asset/playstore.png')} style={{width:40,height:40,marginHorizontal:10}}/>
        <View>
        <Text style={{color:'black',fontSize:14}}>Download The Android</Text>
        <Text style={{color:'black',fontSize:14}}>App</Text>
        <Text style={{color:'black',fontSize:12}}>For Customers & drivers</Text>
        </View>
        <View style={{paddingHorizontal:10,backgroundColor:'#16588e',padding:7,alignItems:'center',justifyContent:'center',marginHorizontal:10,borderRadius:20}}>
            <Text style={{color:'white',fontSize:12
            ,}}>Install Now</Text>
        </View>
        </View>
    
        <View style={{marginBottom:60,marginVertical:1,padding:10,backgroundColor:'#ffd8aa',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image source={require('../asset/ios.png')} style={{width:30,height:30,marginHorizontal:10,color:'white'}}/>
        <View>
        <Text style={{color:'black',fontSize:14}}>Download The Ios App</Text>
        <Text style={{color:'black',fontSize:10}}>For Customers & drivers</Text>
        </View>
        <View style={{paddingHorizontal:10,backgroundColor:'#16588e',padding:7,alignItems:'center',justifyContent:'center',marginHorizontal:10,borderRadius:20}}>
            <Text style={{color:'white',fontSize:12,}}>Install Now</Text>
        </View>
        </View>
        </View>
        </ScrollView>
        </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',padding:20,position:'absolute',bottom:0,right:0,left:0}}>
    <View style={{alignItems:'center'}}>
    <Image source={require('../asset/driver.png')} style={{width:40,height:40}}/>  
    <Text style={{ color: 'black', marginHorizontal: 5,fontSize:12,marginVertical:10 ,fontWeight:'bold'}}>Refer</Text>
    </View>
    <View style={{alignItems:'center'}}>
    <Image source={require('../asset/driver.png')} style={{width:40,height:40}}/>  
    <Text style={{ color: 'black', marginHorizontal: 5,fontSize:12 ,marginVertical:10,fontWeight:'bold'}}>Reviews</Text>
    </View>
    <View style={{alignItems:'center',}}>
    <Image source={require('../asset/driver.png')} style={{width:40,height:40}}/>  
    <Text style={{ color: 'black', marginHorizontal: 5 ,fontSize:12,marginVertical:10,fontWeight:'bold'}}>Track</Text>
    </View>
    </View>
    </>
    
  )

  
}



const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      marginVertical: 30,
      marginHorizontal:10,
      borderWidth:1,
      borderColor:'grey',
      shadowColor: '#000', // Grey shadow color
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 7, // Adjust opacity as needed
      shadowRadius: 9, // Adjust radius as needed
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    content: {
      fontSize: 16,
    },
  });
  