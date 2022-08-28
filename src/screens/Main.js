import {Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Register';
import Login from './Login';
import CreatePin from './CreatePin';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import CreatePinSuccess from './CreatePinSuccess';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeStack"
            component={HomeStack}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CreatePin"
            component={CreatePin}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ResetPassword"
            component={ResetPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CreatePinSuccess"
            component={CreatePinSuccess}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;
