import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR, TEXT_LIGHT} from '../styles/const';

const ButtonAuth = ({text, action, title}) => {
  return (
    <View>
      <TouchableOpacity
        style={styleLocal.buttonWrap}
        onPress={action}
        title={title}>
        <Text style={styleLocal.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  buttonWrap: {
    height: 57,
    width: Dimensions.get('screen').width - 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_COLOR,
    marginBottom: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: TEXT_LIGHT,
  },
});

export default ButtonAuth;
