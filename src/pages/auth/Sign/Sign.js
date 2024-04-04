import {Text, View} from 'react-native';
import Input from '../../../components/Input';
import styles from './Sign.style';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';

import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    navigation.navigate('LoginPage');
  };
  const handleFormSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dert eşelim?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="e-postanızı giriniz"
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="şifrenizi giriniz"
              isSecure
            />
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder="şifrenizi tekrar giriniz"
              isSecure
            />
            <Button text="Kayıt ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </View>
  );
};

export default Sign;
