import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import styles from './Login.style';
import Button from '../../../components/Button/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="e-postanızı giriniz" />
      <Input placeholder="şifrenizi giriniz" />
      <Button text="Giriş yap" />
      <Button text="Kayıt ol" />
    </View>
  );
};

export default Login;
