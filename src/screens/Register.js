import {View, Text} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';

const Register = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View>
            <Text style={styles.authTitle}>Sign Up</Text>
          </View>
          <Text style={styles.textSmall}>
            Create your account to access STD iWallet.
          </Text>
          <Input />
        </View>
      </View>
    </>
  );
};

export default Register;
