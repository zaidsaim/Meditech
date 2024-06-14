import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headercom from '../components/headercom';
import { Divider } from '@rneui/themed';
export default function Appointments({navigation}) {
    const findNearDoctors = [
        { id: 1, location: 'indiranagar', exp: '31year', status: 'Appointment Canceled', name: 'Dr. Michael', specialty: 'Cardiologist', image: require('../assets/doctortwo.jpg'), date: '20-12-2024' },
    ];

    const renderDoctorItem = ({ item }) => (
        item ? (
            <View style={styles.containerStyle}>
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}>{item.status}</Text>
                    <Ionicons name="chevron-down-outline" size={14} color="white" style={{ marginHorizontal: 10 }} />
                </View>
                <View style={styles.doctorDetails}>
                    <View>
                        
                        <Text style={styles.doctorName}>{item.name}</Text>
                        <Text style={styles.detailText}>{item.specialty}</Text>
                        <Text style={styles.detailText}>{item.date}</Text>
                    </View>
                    <Image source={item.image} style={styles.doctorImage} />
                </View>
                <Divider   style={{marginBottom:10,marginHorizontal:10}}/>
                <View style={styles.bookingDetails}>
                    <Text style={styles.bookingText}>Booked for Zaid</Text>
                    <TouchableOpacity style={styles.bookAgainButton}>
                        <Text style={styles.bookAgainText}>Book Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
            </View>
        )
    );

    return (
        <View>
            <Headercom onPress={()=>navigation.goBack()} title={'My Bookings'}/>
        
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
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    statusBar: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    statusText: {
        color: 'white',
        marginHorizontal:5,
        marginVertical:10,
        fontSize: 14,
    },
    doctorDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        color: 'grey',
    },
    detailText: {
        color: 'grey',
    },
    doctorImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
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
    doctorName: {
        color: 'black',
       
    },
    bookAgainButton: {
        borderColor: '#065E86',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent:'space-between',
        alignItems:''
    },
    bookAgainText: {
        color: '#065E86',
        fontSize: 12,
        margin: 10,
    },
});
