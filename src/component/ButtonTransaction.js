import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/const';

const ButtonTransaction = () => {
  return (
    <View style={styleLocal.wrapper}>
      <Text>ButtonTransaction</Text>
    </View>
  );
};

export default ButtonTransaction;

const styleLocal = StyleSheet.create({
  wrapper: {
    height: 57,
    width: Dimensions.get('screen').width / 2 - 20,
    backgroundColor: PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10,
  },
});
