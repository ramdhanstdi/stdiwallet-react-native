import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email Format').required('Required'),
  password: Yup.string().required('Required'),
});

//Form for Formik
const FormLogin = ({
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  navigation,
}) => {
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
        {errors.email ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="email" />
          </Text>
        ) : null}
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="lock"
          placeholder="Input Password"
          type="text"
          secure={true}
          name="password"
        />
        {errors.password ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="password" />
          </Text>
        ) : null}
        <Text
          style={styleLocal.textForgot}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Login" />
        <Text style={styles.questionText}>
          Don’t have an account? Let’s
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Register')}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const Login = ({navigation}) => {
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
          <View>
            <Text style={styles.authTitle}>Login</Text>
          </View>
          <Text style={styles.textSmall}>
            Login to your existing account to access all the features in STD
            iWallet.
          </Text>
          <Formik
            validationSchema={loginSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={onSubmit}>
            {props => <FormLogin {...props} navigation={navigation} />}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

const styleLocal = StyleSheet.create({
  textForgot: {
    alignItems: 'flex-end',
    marginRight: 20,
    textAlign: 'right',
    marginTop: 20,
  },
});

export default Login;
