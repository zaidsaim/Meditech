import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const OTImagePicker = ({ onImageSelected ,imageUri,handleSelectImage}) => {
  const [imageUri, setImageUri] = useState(null);

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Something went wrong while selecting the image.');
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        onImageSelected(uri);
      }
    });
  };

  const handleCaptureImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        Alert.alert('Error', 'Something went wrong while capturing the image.');
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        onImageSelected(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Select Image" onPress={handleSelectImage} />
        <Button title="Capture Image" onPress={handleCaptureImage} />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default OTImagePicker;
