import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  CARD_COLOR,
  SUCCESS_COLOR,
  TEXT_DARK,
  WARNING_COLOR,
} from '../styles/const';

const CardNotif = ({name, amount, type}) => {
  return (
    <View style={styleLocal.wrapper}>
      <View>
        {type === 'send' ? (
          <Icon
            style={styleLocal.icon}
            name="arrow-up"
            size={25}
            color={WARNING_COLOR}
          />
        ) : (
          <Icon
            style={styleLocal.icon}
            name="arrow-down"
            size={25}
            color={SUCCESS_COLOR}
          />
        )}
      </View>
      <View>
        <Text style={styleLocal.textUp}>Transfered from Joshua Lee</Text>
        <Text style={styleLocal.textDown}>Rp220.000</Text>
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <View>
      <Text>This Month</Text>
      <CardNotif />
      <CardNotif />
      <CardNotif />
      <CardNotif />
    </View>
  );
};

export default Notification;

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: CARD_COLOR,
    height: 92,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 20,
  },
  textUp: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: TEXT_DARK,
  },
  textDown: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: TEXT_DARK,
  },
});
