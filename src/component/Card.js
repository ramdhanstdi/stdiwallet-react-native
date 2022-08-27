import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  CARD_COLOR,
  SUCCESS_COLOR,
  TEXT_DARK,
  TEXT_LIGHT,
  WARNING_COLOR,
} from '../styles/const';
import {DEFAULT_IMG} from '../assets/defaultimg';
import styles from '../styles/global';

const Card = ({item}) => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wrapLeft}>
        {item.image ? (
          <Image source={{uri: item.image, width: 50, height: 50}} />
        ) : (
          <Image source={{uri: DEFAULT_IMG, width: 50, height: 50}} />
        )}
        <View style={styleLocal.wrapText}>
          <Text style={styleLocal.textName}>{item.name}</Text>
          <Text style={styles.text14px}>{item.type}</Text>
        </View>
      </View>
      <View>
        {item.type === 'Send'
          ? item.amount && (
              <Text style={styleLocal.textMoneyR}>{`-${item.amount}`}</Text>
            )
          : item.amount && (
              <Text style={styleLocal.textMoneyG}>{`+${item.amount}`}</Text>
            )}
      </View>
    </View>
  );
};

export default Card;

const styleLocal = StyleSheet.create({
  wrapper: {
    height: 96,
    width: Dimensions.get('screen').width,
    marginVertical: 10,
    backgroundColor: CARD_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  textName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: TEXT_DARK,
  },
  wrapText: {
    marginLeft: 15,
  },
  wrapLeft: {
    flexDirection: 'row',
  },
  textMoneyG: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: SUCCESS_COLOR,
  },
  textMoneyR: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: WARNING_COLOR,
  },
});
