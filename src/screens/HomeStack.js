import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import FinReceiver from './FinReceiver';
import Transfer from './Transfer';
import Confirmation from './Confirmation';
import EnterPin from './EnterPin';
import StatusSucces from './StatusSucces';
import StatusFailed from './StatusFailed';
import TopUp from './TopUp';
import PersonalInfo from './PersonalInfo';
import ManageNumber from './ManageNumber';
import AddPhone from './AddPhone';

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
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Enter Your Pin" component={EnterPin} />
      <Stack.Screen name="Top Up" component={TopUp} />
      <Stack.Screen name="Personal Information" component={PersonalInfo} />
      <Stack.Screen name="Manage Number" component={ManageNumber} />
      <Stack.Screen name="Add Phone Number" component={AddPhone} />
      <Stack.Screen
        options={{headerShown: false}}
        name="StatusSucces"
        component={StatusSucces}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="StatusFailed"
        component={StatusFailed}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
