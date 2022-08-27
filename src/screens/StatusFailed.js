import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import Card from '../component/Card';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SUCCESS_COLOR, TEXT_DARK} from '../styles/const';

const data = {name: 'Alex', type: '08435734', image: null};

const StatusFailed = ({navigation}) => {
  const submit = () => {
    navigation.navigate('Enter Your Pin');
  };
  return (
    <ScrollView>
      <View style={styleLocal.wrapStatus}>
        <Icon name="check-circle" size={70} color={SUCCESS_COLOR} />
        <Text style={styles.bigText}>Transfer Success</Text>
        <Text style={styleLocal.text}>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text>
      </View>
      <View style={styles.wrapDetails}>
        <Text style={styles.homeText18px}> Details</Text>
        <CardDetails smalText="Amount" bigText="Rp 10.000" />
        <CardDetails smalText="Balance Left" bigText="Rp20.000" />
        <CardDetails smalText="Date & Time" bigText="May 11, 2020 - 12.20" />
        <CardDetails smalText="Notes" bigText="Pala bapak kau" />
        <Text style={styles.homeText18px}>Transfer to</Text>
        <View style={styleLocal.side}>
          <Card item={data} />
        </View>
        <View style={styles.button}>
          <ButtonAuth text="Confirm" action={submit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default StatusFailed;

const styleLocal = StyleSheet.create({
  wrapStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
    color: TEXT_DARK,
  },
  side: {
    marginLeft: -10,
  },
});
