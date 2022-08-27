import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import Card from '../component/Card';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SUCCESS_COLOR} from '../styles/const';

const data = {name: 'Alex', type: '08435734', image: null};

const StatusSucces = ({navigation}) => {
  const submit = () => {
    navigation.navigate('HomeTab');
  };
  return (
    <ScrollView>
      <View style={styleLocal.wrapStatus}>
        <Icon name="check-circle" size={70} color={SUCCESS_COLOR} />
        <Text style={styles.bigText}>Transfer Success</Text>
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

export default StatusSucces;

const styleLocal = StyleSheet.create({
  wrapStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  side: {
    marginLeft: -10,
  },
});
