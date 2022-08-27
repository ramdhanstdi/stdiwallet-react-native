import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SECONDARY_COLOR} from '../styles/const';

import Home from './Home';
import Transaction from './Transaction';
import History from './History';
import Profile from './Profile';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarActiveTintColor: SECONDARY_COLOR,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarActiveTintColor: SECONDARY_COLOR,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="file-text-o" color={color} size={size} />
          ),
        }}
        name="Transaction"
        component={Transaction}
      />
      <BottomTab.Screen
        options={{
          tabBarActiveTintColor: SECONDARY_COLOR,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
        name="History"
        component={History}
      />
      <BottomTab.Screen
        options={{
          tabBarActiveTintColor: SECONDARY_COLOR,
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
