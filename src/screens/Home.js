import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Headers from '../component/Headers';
import {SECONDARY_COLOR, TEXT_LIGHT} from '../styles/const';
import ButtonTransaction from '../component/ButtonTransaction';

const Home = () => {
  return (
    <>
      <Headers textTitle="Gojo Dan" image="v" icon={true} subText="Hello" />
      <View style={styleLocal.wrapBalance}>
        <View style={styleLocal.wrapText}>
          <Text style={styleLocal.textBalance}>Balance</Text>
          <Text style={styleLocal.textSaldo}>Rp 100.000</Text>
          <Text style={styleLocal.textNum}>08347235342</Text>
        </View>
      </View>
      <View style={styleLocal.wrapButton}>
        <ButtonTransaction />
        <ButtonTransaction />
      </View>
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  wrapBalance: {
    height: 141,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  wrapText: {
    marginHorizontal: 20,
  },
  textBalance: {
    fontSize: 14,
    fontWeight: '400',
    color: TEXT_LIGHT,
    lineHeight: 19,
  },
  textSaldo: {
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_LIGHT,
    lineHeight: 33,
  },
  textNum: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_LIGHT,
    lineHeight: 19,
  },
  wrapButton: {
    flexDirection: 'row',
    marginVertical: 30,
  },
});

export default Home;
