import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import React from 'react';
import {TEXT_DARK} from '../styles/const';

const Input = () => {
  return (
    <View style={styleLocal.wrapForm}>
      <TextInput style={styleLocal.inputBorder} />
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapForm: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 18,
  },
  inputBorder: {
    borderBottomColor: TEXT_DARK,
    borderBottomWidth: 1,
  },
});

export default Input;
