import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import FlashMessage from 'react-native-flash-message';
import Messages from './pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();
const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'Dertler',
              headerTintColor: colors.darkgreen,
              headerRight: () => (
                <TouchableOpacity onPress={() => auth().signOut()}>
                  <Text>Geri</Text>
                </TouchableOpacity>
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
