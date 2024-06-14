import { color } from "@rneui/themed/dist/config";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const OTPhoneinput = ({
    value,
    valid = false, // Set default valid state to false
    showMessage = false, // Set default showMessage state to false
    setValue,
    setFormattedValue,
    setValid,
    setShowMessage,
    onPress,
    containerStyle = {},
    onChangeText,
    onChangeFormattedText,
    defaultValue,
    textContainerStyle,
    textInputStyle,
    
    
  }) => {
    const phoneInput = useRef(null);
  
    const handlePress = () => {
      const checkValid = phoneInput.current?.isValidNumber(value);
      setShowMessage(true);
      setValid(checkValid ? checkValid : false);
      onPress(); // Trigger onPress function passed from parent component
    };
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <SafeAreaView style={styles.wrapper}>
            {showMessage && (
              <View style={styles.message}>
                <Text>Valid : {valid ? "true" : "false"}</Text>
              </View>
            )}
            <PhoneInput
              ref={phoneInput}
              defaultValue={defaultValue}
              defaultCode="DM"
              layout="first"
              onChangeText={onChangeText}
              onChangeFormattedText={onChangeFormattedText}
              withDarkTheme
              withShadow
              autoFocus
              containerStyle={containerStyle}
              textContainerStyle={textContainerStyle}
              textInputStyle={textInputStyle}
            />
            
          </SafeAreaView>
        </View>
      </>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default OTPhoneinput;
