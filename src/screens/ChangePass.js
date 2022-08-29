import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ErrorMessage, Formik} from 'formik';
import Input from '../component/Input';
import styles from '../styles/global';
import * as Yup from 'yup';
import ButtonAuth from '../component/ButtonAuth';
import {useDispatch, useSelector} from 'react-redux';
import {resetmsg} from '../redux/reducers/profile';
import {changePass} from '../redux/asyncAction/profile';

const changePassSchema = Yup.object().shape({
  oldpassword: Yup.string().required('Required'),
  newpassword: Yup.string().min(8).required('Required'),
  confirmpassword: Yup.string().min(8).required('Required'),
});

const FormChangePass = ({handleBlur, handleChange, handleSubmit, errors}) => {
  return (
    <>
      <View style={styleLocal.wrap}>
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="lock"
          placeholder="Input Old Password"
          type="text"
          name="oldpassword"
        />
        {errors.oldpassword ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="oldpassword" />
          </Text>
        ) : null}
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="lock"
          placeholder="Input New Password"
          type="text"
          name="newpassword"
        />
        {errors.newpassword ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="newpassword" />
          </Text>
        ) : null}
        <Input
          onChangeText={handleChange}
          onBlur={handleBlur}
          icon="lock"
          placeholder="Input Confirm Password"
          type="text"
          name="confirmpassword"
        />
        {errors.confirmpassword ? (
          <Text style={styles.warningForm}>
            <ErrorMessage name="confirmpassword" />
          </Text>
        ) : null}
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Submit" />
      </View>
    </>
  );
};

const ChangePass = ({navigation}) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const successmsg = useSelector(state => state.profile.successmsg);
  const [warning, setWarning] = React.useState('');
  const submit = val => {
    const request = {
      oldPass: val.oldpassword,
      newPass: val.newpassword,
      confirmPass: val.confirmpassword,
    };
    if (val.newpassword !== val.confirmpassword) {
      setWarning('New Password Not Match');
    } else {
      dispatch(changePass({token, request}));
    }
  };
  React.useEffect(() => {
    if (successmsg) {
      setTimeout(() => dispatch(resetmsg()), 3 * 1000);
    }
  }, [successmsg]);
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
          validationSchema={changePassSchema}
          initialValues={{
            oldpassword: '',
            newpassword: '',
            confirmpassword: '',
          }}
          onSubmit={submit}>
          {props => <FormChangePass {...props} />}
        </Formik>
      </View>
    </>
  );
};

export default ChangePass;

const styleLocal = StyleSheet.create({
  wrap: {
    height: Dimensions.get('screen').width + 100,
  },
});
