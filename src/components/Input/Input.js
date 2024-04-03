import {Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';
const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;
