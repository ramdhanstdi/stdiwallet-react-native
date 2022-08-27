import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SUCCESS_COLOR } from '../styles/const';

const CreatePinSuccess = ({navigation}) => {
  const onSubmit = val => {
    console.log(val);
    navigation.navigate('Home');
    //disini untuk fungsi register lempar ke Crate pin
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View style={styleLocal.logo}>
            <Icon name="check-circle" size={70} color={SUCCESS_COLOR} />
          </View>
          <View>
            <Text style={styles.authTitle}>Login</Text>
          </View>
          <Text style={styles.textSmall}>
            Login to your existing account to access all the features in STD
            iWallet.
          </Text>
          <ButtonAuth style={styles.button} title="submit" text="Confirm" />
        </View>
      </ScrollView>
    </>
  );
};

const styleLocal = StyleSheet.create({
  logo: {
    paddingTop: 40,
  },
  button: {
    paddingTop: 50,
  },
});

export default CreatePinSuccess;
