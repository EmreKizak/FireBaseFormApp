import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';
const Input = ({placeholder, onChangeText, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
