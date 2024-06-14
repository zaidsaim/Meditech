import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

const OTDatepicker = ({ open, date, onCancel, onConfirm, mode }) => {
  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.container}>
        <View style={styles.dateTimePickerContainer}>
          <DatePicker
            date={date}
            onDateChange={onConfirm}
            mode={mode}
            textColor="#000"
            fadeToColor="none"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  dateTimePickerContainer: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default OTDatepicker;
