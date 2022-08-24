import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';

const Register = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View>
            <Text style={styles.authTitle}>Sign Up</Text>
          </View>
          <Text style={styles.textSmall}>
            Create your account to access STD iWallet.
          </Text>
          <View style={styles.inputWrap}>
            <Input icon="user" placeholder="Input Username" type="text" />
            <Input icon="envelope" placeholder="Input Username" type="text" />
            <Input
              icon="lock"
              placeholder="Input Username"
              type="text"
              secure={true}
            />
          </View>
          <ButtonAuth text="Sign Up" />
          <Text style={styles.questionText}>
            Already have an account? Let’s
            <Text style={styles.linkText}> Login</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
