import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {useSelector} from 'react-redux';

const Card = ({item}) => {
  const id = useSelector(state => state.auth.id);
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wrapLeft}>
        {item.profile_photo ? (
          <Image
            style={styleLocal.pic}
            source={{uri: item.profile_photo, width: 50, height: 50}}
          />
        ) : (
          <Image source={{uri: DEFAULT_IMG, width: 50, height: 50}} />
        )}
        <View style={styleLocal.wrapText}>
          <Text
            style={
              styleLocal.textName
            }>{`${item.first_name} ${item.last_name}`}</Text>
          {item.transfertype ? (
            <Text style={styles.text14px}>{item.transfertype}</Text>
          ) : (
            <Text style={styles.text14px}>{item.num_phone}</Text>
          )}
        </View>
      </View>
      <View>
        {item.transfertype === 'Transfer' && item.sender_id === id
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
  pic: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  wrapper: {
    height: 96,
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    backgroundColor: CARD_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 6,
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
