import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FloatingButton.style';

const FloatingButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
