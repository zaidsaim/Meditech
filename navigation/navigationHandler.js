import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './appStack';
import AuthStack from './authStack';

export default function NavigationHandler() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const uservalue = await AsyncStorage.getItem('userlogindata');
        if (uservalue !== null) {
          const parsedValue = JSON.parse(uservalue);
          setToken(parsedValue?.data?.token);
        }
      } catch (error) {
        console.error('Error fetching token', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {token ? <AppStack /> : <AuthStack />}
    </View>
  );
}
