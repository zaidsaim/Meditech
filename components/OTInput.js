// Textinput.js

import React from 'react';
import { Input } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export default function OTInput({ placeholder, onChangeText, value, keyboardType }) {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      containerStyle={styles.containerStyle}
      inputStyle={styles.inputStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 5,
  },
  inputStyle: {
    borderColor: 'gray',
    fontSize:12,
    borderRadius: 5,
    padding: 10,
  },
  errorStyle: {
    color: 'red',
  },
});
