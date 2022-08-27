import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CARD_COLOR, PRIMARY_COLOR, TEXT_DARK} from '../styles/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';

const CardTopUp = ({number, text}) => {
  return (
    <View style={styleLocal.wraper}>
      <Text style={styleLocal.number}>{number}</Text>
      <Text style={styleLocal.text}>{text}</Text>
    </View>
  );
};

const TopUp = () => {
  return (
    <ScrollView>
      <View style={styleLocal.wrapHead}>
        <View style={styleLocal.plus}>
          <Icon name="plus" color={PRIMARY_COLOR} size={25} />
        </View>
        <View>
          <Text style={styleLocal.acount}>Virtual Account Number</Text>
          <Text style={styleLocal.req}>2389 081393877946</Text>
        </View>
      </View>
      <View style={styleLocal.textWrap}>
        <Text style={styles.textSmall}>
          We provide you virtual account number for top up via nearest ATM.
        </Text>
      </View>
      <Text style={styles.homeText18px}> How to Top-Up</Text>
      <CardTopUp
        number="1"
        text="Go to the nearest ATM or you can use E-Banking."
      />
      <CardTopUp
        number="2"
        text="Type your security number on the
        ATM or E-Banking."
      />
      <CardTopUp number="3" text="Select “Transfer” in the menu" />
      <CardTopUp
        number="4"
        text="Type the virtual account number that
        we provide you at the top."
      />
      <CardTopUp
        number="5"
        text="Type the amount of the money you
        want to top up."
      />
      <CardTopUp number="6" text="Read the summary details" />
      <CardTopUp number="7" text="Press transfer / top up" />
      <CardTopUp
        number="8"
        text="You can see your money in Zwallet
        within 3 hours."
      />
    </ScrollView>
  );
};

export default TopUp;

const styleLocal = StyleSheet.create({
  wraper: {
    backgroundColor: CARD_COLOR,
    flexDirection: 'row',
    height: 88,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: TEXT_DARK,
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  wrapHead: {
    height: 96,
    backgroundColor: CARD_COLOR,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  plus: {
    width: 56,
    height: 56,
    backgroundColor: TEXT_DARK,
    borderRadius: 15,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: TEXT_DARK,
  },
  req: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: TEXT_DARK,
  },
  textWrap: {
    marginVertical: 15,
  },
});
