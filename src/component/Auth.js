import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, TEXT_DARK} from '../styles/const';

const Auth = () => {
  return (
    <View style={styleLocal.wrapper}>
      <Text style={styleLocal.text}>STD iWallet</Text>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 157,
  },
});

export default Auth;
