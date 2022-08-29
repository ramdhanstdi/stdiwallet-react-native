import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ErrorMessage, Formik} from 'formik';
import Input from '../component/Input';
import styles from '../styles/global';
import * as Yup from 'yup';
import ButtonAuth from '../component/ButtonAuth';
import {SUCCESS_COLOR, TEXT_DARK, WARNING_COLOR} from '../styles/const';
import {useDispatch, useSelector} from 'react-redux';
import {addNumber, getUserLogin} from '../redux/asyncAction/profile';

const phoneSchema = Yup.object().shape({
  phone: Yup.string()
    .min(11)
    .max(15)
    .required('You Must Input Indonesian Phone(+62)'),
});

const FormPhone = ({handleBlur, handleChange, handleSubmit, errors}) => {
  return (
    <>
      <View style={styleLocal.wrap}>
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="phone"
          placeholder="Input Phone Number"
          type="text"
          name="phone"
        />
        {errors.phone ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="phone" />
          </Text>
        ) : null}
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Submit" />
      </View>
    </>
  );
};

export default function AddPhone({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const regExp = /[a-zA-Z]/g;
  const successmsg = useSelector(state => state.profile.successmsg);
  const [warning, setWarning] = React.useState('');
  const submit = val => {
    if (regExp.test(val.phone)) {
      setWarning('Input Only Mobile Phone Format');
    } else if (
      (val.phone[0] === '0' && val.phone[1] === '8') ||
      val.phone.includes('+62')
    ) {
      dispatch(addNumber({token, num_phone: val.phone}));
      setTimeout(() => navigation.navigate('Personal Information'), 3 * 1000);
    } else {
      setWarning('Invalid Format Number');
    }
  };
  return (
    <>
      {warning && <Text style={styles.warning}>{warning}</Text>}
      {successmsg && <Text style={styles.successmsg}>{successmsg}</Text>}
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
        </View>
        <Formik
          validationSchema={phoneSchema}
          initialValues={{phone: ''}}
          onSubmit={submit}>
          {props => <FormPhone {...props} />}
        </Formik>
      </View>
    </>
  );
}

const styleLocal = StyleSheet.create({
  wrap: {
    height: Dimensions.get('screen').width + 100,
  },
});
