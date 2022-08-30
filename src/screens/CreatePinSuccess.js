import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SUCCESS_COLOR } from '../styles/const';

const CreatePinSuccess = ({navigation}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View style={styleLocal.logo}>
            <Icon name="check-circle" size={70} color={SUCCESS_COLOR} />
          </View>
          <View>
            <Text style={styles.authTitle}>PIN Successfully Created</Text>
          </View>
          <Text style={styles.textSmall}>
          Your PIN was successfully created and you can now access all the features in iWallet. Login to your new account and start exploring!
          <Text>{'\n'}</Text>
          </Text>
          <ButtonAuth style={styles.button} action={navigation.navigate('Login')} title="submit" text="Login Now" />
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
