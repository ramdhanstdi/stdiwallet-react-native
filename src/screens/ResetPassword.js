import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

const ResetSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string().min(8).required('Required'),
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
          icon="lock"
          placeholder="Input Password"
          type="text"
          secure={true}
          name="oldPassword"
        />
        {errors.oldPassword ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="oldPassword" />
          </Text>
        ) : null}
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="lock"
          placeholder="Input Password"
          type="text"
          secure={true}
          name="newPassword"
        />
        {errors.newPassword ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="newPassword" />
          </Text>
        ) : null}
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth
          action={handleSubmit}
          title="submit"
          text="Reset Password"
        />
      </View>
    </View>
  );
};

const ResetPassword = ({navigation}) => {
  const onSubmit = val => {
    console.log(val);
    navigation.navigate('Login');
    //disini untuk fungsi register lempar ke Crate pin
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View>
            <Text style={styles.authTitle}>Reset Password</Text>
          </View>
          <Text style={styles.textSmall}>
            Create and confirm your new password so you can login to STD
            iWallet.
          </Text>
          <Formik
            validationSchema={ResetSchema}
            initialValues={{oldPassword: '', newPassword: ''}}
            onSubmit={onSubmit}>
            {props => <FormLogin {...props} navigation={navigation} />}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;
