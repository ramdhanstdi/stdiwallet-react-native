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
import {useDispatch, useSelector} from 'react-redux';
import PushNotification from 'react-native-push-notification';
import {saveToken} from '../redux/asyncAction/token';

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const tokenDevice = useSelector(state => state.token.token);
  PushNotification.configure({
    onRegister: token => {
      console.log('TOKEN:', token);
      if (tokenDevice !== token.token) {
        dispatch(saveToken({token: token.token}));
      }
    },
    onNotification: notification => {
      console.log('Notifocation:', notification);
      notification.finish(() => {
        console.log('Finish');
      });
    },
  });
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {token ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="HomeStack"
              component={HomeStack}
            />
          </Stack.Navigator>
        </>
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
