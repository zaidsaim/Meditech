import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headercom from '../components/headercom';
export default function MyDoctor({navigation}) {
    const findNearDoctors = [
        { id: 1, location: 'indiranagar', exp: '31year', status: 'Appointment Canceled', name: 'Dr. Michael', specialty: 'Cardiologist', image: require('../assets/doctortwo.jpg'), date: '20-12-2024' },
    ];

    const renderDoctorItem = ({ item }) => (
        item ? (
            <View style={styles.containerStyle}>
                <View style={styles.doctorDetails}>
                <Image source={item.image} style={styles.doctorImage} />
                <View>
                        <Text style={styles.doctorname}>{item.name}</Text>
                        <Text style={styles.doctorspeciality}>{item.specialty}</Text>
                    </View>
                    </View>
                    <TouchableOpacity style={styles.bookAgainButton}>
                        <Text style={styles.bookAgainText}>Book</Text>
                    </TouchableOpacity>   
            </View>
        ) : (
            <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
            </View>
        )
    );

    return (
        <View>
        <Headercom onPress={()=>navigation.goBack()} title={'My doctors'}/>
        <FlatList
            data={findNearDoctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '95%',
        height: 'auto',
        borderColor: 'grey',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        elevation: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#cadbd1',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    statusBar: {
        backgroundColor: '#2fbd68',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    statusText: {
        color: 'red',
        padding: 20,
        fontSize: 14,
    },
    doctorDetails: {
        flexDirection: 'row',
        padding: 5,
        color: 'grey',
        alignItems:'center'
    },
    doctorname: {
        color: 'black',
    },
    doctorspeciality: {
        color: 'grey',
    },
    doctorImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor:'#065E86',
        borderWidth:1,
        marginRight:10
    },
    bookingDetails: {
        marginHorizontal: 10,
        borderRadius: 5,
        justifyContent:'space-between',
        marginBottom: 10,
        flexDirection:'row',
        alignItems:'center'
    },
    bookingText: {
        color: 'grey',
       
    },
    bookAgainButton: {
        borderColor: '#065E86',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor:'#065E86',
        
    },
    bookAgainText: {
        color: 'white',
        fontSize: 14,
        margin: 10,
    },
});
