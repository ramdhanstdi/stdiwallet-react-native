import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/const';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonTransaction = ({icon, text, action}) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styleLocal.wrapper}>
        <Icon name={icon} size={25} color={SECONDARY_COLOR} />
        <Text style={styleLocal.text}>{text}</Text>
      </View>
    </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: TEXT_DARK,
  },
});
