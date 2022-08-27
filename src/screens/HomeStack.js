import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import FinReceiver from './FinReceiver';
import Transfer from './Transfer';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTab"
        component={HomeTab}
      />
      <Stack.Screen name="Find Receiver" component={FinReceiver} />
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  );
};

export default HomeStack;
