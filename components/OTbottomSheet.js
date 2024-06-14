import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
//https://www.createwebsite.net/freebies/atlas/index.html
const OTBottomSheet = ({ height, customStyles, customModalProps, children }) => {
  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  return (
    <RBSheet
      ref={refRBSheet}
      height={height}
      draggable={true}
      customStyles={customStyles}
      customModalProps={customModalProps}
    >
      {/* Content of the bottom sheet rendered dynamically based on props */}
      {children}
    </RBSheet>
  );
}

export default OTBottomSheet;
