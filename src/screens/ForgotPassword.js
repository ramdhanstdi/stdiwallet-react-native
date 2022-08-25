import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

const ForgotSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email Format').required('Required'),
});

//Form for Formik
const FormForgot = ({errors, handleChange, handleBlur, handleSubmit}) => {
  return (
    <View style={styles.formikWrap}>
      <View>
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="envelope"
          placeholder="Input Email"
          type="text"
          name="email"
        />
        <Text style={styles.warningForm}>
          <ErrorMessage name="email" />
        </Text>
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Confirm" />
      </View>
    </View>
  );
};

const ForgotPassword = ({navigation}) => {
  const onSubmit = val => {
    console.log(val);
    navigation.navigate('ResetPassword');
    //disini untuk fungsi register lempar ke Crate pin
  };
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
          <Formik
            validationSchema={ForgotSchema}
            initialValues={{email: ''}}
            onSubmit={onSubmit}>
            {props => <FormForgot {...props} navigation={navigation} />}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;
