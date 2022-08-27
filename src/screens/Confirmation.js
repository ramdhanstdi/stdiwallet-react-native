import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import Card from '../component/Card';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';

const data = [{name: 'Alex', type: '08435734', image: null}];

const Confirmation = ({navigation}) => {
  const submit = () => {
    navigation.navigate('Enter Your Pin');
  };
  return (
    <>
      <View style={styles.wrapList}>
        <FlatList data={data} renderItem={Card} />
      </View>
      <ScrollView style={styles.wrapDetails}>
        <Text style={styles.homeText18px}>Details</Text>
        <CardDetails smalText="Amount" bigText="Rp 10.000" />
        <CardDetails smalText="Balance Left" bigText="Rp20.000" />
        <CardDetails smalText="Date & Time" bigText="May 11, 2020 - 12.20" />
        <CardDetails smalText="Notes" bigText="Pala bapak kau" />
        <View style={styles.button}>
          <ButtonAuth text="Confirm" action={submit} />
        </View>
      </ScrollView>
    </>
  );
};

export default Confirmation;

const styleLocal = StyleSheet.create({});
