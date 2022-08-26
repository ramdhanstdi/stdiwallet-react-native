import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import CreatePin from './src/screens/CreatePin';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import CreatePinSuccess from './src/screens/CreatePinSuccess';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( <Home/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Login"
    //       component={Login}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Register"
    //       component={Register}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="CreatePin"
    //       component={CreatePin}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="ForgotPassword"
    //       component={ForgotPassword}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="ResetPassword"
    //       component={ResetPassword}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Home"
    //       component={Home}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
