import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../redux/asyncAction/auth';

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(5)
    .matches(/^[a-z0-9]+$/i, 'Input Only Alphabeth and Number')
    .required('Required'),
  email: Yup.string().email('Invalid Email Format').required('Required'),
  password: Yup.string().min(8).required('Required'),
});

//Form Formik with All Params
const FormRegister = ({
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
          icon="user"
          placeholder="Input Username"
          type="text"
          name="username"
        />
        {errors.username ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="username" />
          </Text>
        ) : null}
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
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Sign Up" />
        <Text style={styles.questionText}>
          Already have an account? Let’s
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const Register = ({navigation}) => {
  const successmsg = useSelector(state => state.auth.successmsg);
  const dispatch = useDispatch();
  const onSubmit = val => {
    const request = {
      username: val.username,
      email: val.email,
      password: val.password,
    };
    dispatch(register(request));
  };
  React.useEffect(() => {
    if (successmsg) {
      navigation.navigate('Login');
    }
  }, [successmsg]);
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
            validationSchema={registerSchema}
            initialValues={{email: '', username: '', password: ''}}
            onSubmit={onSubmit}>
            {props => <FormRegister {...props} navigation={navigation} />}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
