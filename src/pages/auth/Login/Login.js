import {Text, View} from 'react-native';
import TextInput from '../../../components/Input';
import styles from './Login.style';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const handleSignUp = () => {
    navigation.navigate('SignPage');
  };

  const handleFormSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
    navigation.navigate('MessagesScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dert eşelim?</Text>
      <Formik
        initialValues={initialFormValues}
        onSubmit={values => handleFormSubmit(values)}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <TextInput
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="e-postanızı giriniz"
            />
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="şifrenizi giriniz"
              isSecure
            />
            <Button text="Giriş yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Kayıt ol" theme="secondary" onPress={handleSignUp} />
    </View>
  );
};

export default Login;
