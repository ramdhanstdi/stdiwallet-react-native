import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

const pinSchema = Yup.object().shape({
  pin1: Yup.string().min(1).max(1).required(),
  pin2: Yup.string().min(1).max(1).required(),
  pin3: Yup.string().min(1).max(1).required(),
  pin4: Yup.string().min(1).max(1).required(),
  pin5: Yup.string().min(1).max(1).required(),
  pin6: Yup.string().min(1).max(1).required(),
});

const FormPin = ({errors, handleChange, handleBlur, handleSubmit}) => {
  return (
    <>
      <View><Text>hahaha</Text>
      </View>
    </>
  );
};

const CreatePin = ({navigation}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View>
            <Text style={styles.authTitle}>Create Security PIN</Text>
          </View>
          <Text style={styles.textSmall}>
            Create a PIN that’s contain 6 digits number for security purpose in
            STD iWallet.
          </Text>
          <Formik
            validationSchema={pinSchema}
            initialValues={{email: '', password: ''}}>
            {props => <FormPin {...props} navigation={navigation} />}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default CreatePin;

const styleLocal = StyleSheet.create({});
