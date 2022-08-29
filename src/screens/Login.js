import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {login} from '../redux/asyncAction/auth';
import {SUCCESS_COLOR, TEXT_DARK} from '../styles/const';

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
  const token = useSelector(state => state.auth.token);
  const errormsg = useSelector(state => state.auth.errormsg);
  console.log(errormsg);
  const successmsg = useSelector(state => state.auth.successmsg);
  const dispatch = useDispatch();
  const onSubmit = val => {
    const email = val.email;
    const password = val.password;
    const request = {email, password};
    dispatch(login(request));
  };
  React.useEffect(() => {
    if (token) {
      navigation.navigate('HomeTab');
    }
  }, [errormsg]);
  return (
    <>
      {successmsg && <Text style={styleLocal.successmsg}>{successmsg}</Text>}
      {errormsg && <Text style={styles.warning}>{errormsg}</Text>}
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
  successmsg: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: SUCCESS_COLOR,
    height: 30,
    color: TEXT_DARK,
  },
});

export default Login;
