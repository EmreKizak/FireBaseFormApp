import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Buton = ({text, theme = 'primary', onPress}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <View style={styles[theme].button_container}>
        <Text style={styles[theme].title}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buton;
