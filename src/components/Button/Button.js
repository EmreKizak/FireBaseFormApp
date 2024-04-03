import {Button, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Buton = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <TouchableOpacity>
          <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buton;
