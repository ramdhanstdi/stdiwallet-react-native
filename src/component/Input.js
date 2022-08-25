import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import React from 'react';
import {TEXT_DARK} from '../styles/const';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  icon,
  placeholder,
  type,
  secure,
  onChangeText,
  onBlur,
  name,
}) => {
  return (
    <View style={styleLocal.wrapForm}>
      <View style={styleLocal.icons}>
        <Icon name={icon} size={25} />
      </View>
      <View style={styleLocal.inputBorder}>
        <TextInput
          onChangeText={onChangeText(name)}
          onBlur={onBlur(name)}
          style={styleLocal.text}
          placeholder={placeholder}
          type={type}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapForm: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 18,
    flexDirection: 'row',
    marginTop: 40,
  },
  inputBorder: {
    borderBottomColor: TEXT_DARK,
    borderBottomWidth: 1,
    flex: 1,
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: TEXT_DARK,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    color: TEXT_DARK,
    paddingHorizontal: 16,
  },
});

export default Input;
