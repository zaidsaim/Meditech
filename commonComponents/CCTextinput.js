import * as React from 'react';
import { TextInput } from 'react-native-paper';

const CCTextinput = ({label,value,onChangeText,mode}) => {
  

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={{backgroundColor:'white',margin:10}}
      mode={mode}
    />
  );
};

export default CCTextinput;