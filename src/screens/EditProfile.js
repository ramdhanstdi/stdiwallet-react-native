import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardDetails from '../component/CardDetails';
import {useDispatch, useSelector} from 'react-redux';
import {editProfile, getUserLogin} from '../redux/asyncAction/profile';
import {Formik} from 'formik';
import ButtonAuth from '../component/ButtonAuth';
import {SUCCESS_COLOR, TEXT_DARK} from '../styles/const';

const FormEdit = ({handleChange, handleSubmit, handleBlur}) => {
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <Text style={styles.smallText}>First Name</Text>
      <TextInput
        style={styles.bigText}
        onChangeText={handleChange('first_name')}
        onBlur={handleBlur('first_name')}
        placeholder={profile.first_name ? profile.first_name : 'Write Here'}
      />
      <Text style={styles.smallText}>Last Name</Text>
      <TextInput
        style={styles.bigText}
        onChangeText={handleChange('last_name')}
        onBlur={handleBlur('last_name')}
        placeholder={profile.last_name ? profile.last_name : 'Write Here'}
      />
      <ButtonAuth text="Confirm" title="submit" action={handleSubmit} />
    </>
  );
};

const EditProfile = ({navigation}) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const successmsg = useSelector(state => state.profile.successmsg);
  const submit = val => {
    const request = {first_name: val.first_name, last_name: val.last_name};
    dispatch(editProfile({token, request}));
  };
  React.useEffect(() => {
    if (successmsg) {
      setTimeout(() => dispatch(getUserLogin(token)), 3 * 1000);
    } else {
      dispatch(getUserLogin(token));
    }
  }, [successmsg]);
  return (
    <ScrollView>
      {successmsg && <Text style={styleLocal.successmsg}>{successmsg}</Text>}
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, change here.
          </Text>
        </View>
        <Formik
          initialValues={{first_name: '', last_name: ''}}
          onSubmit={submit}>
          {props => <FormEdit {...props} />}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styleLocal = StyleSheet.create({
  text: {
    marginVertical: 15,
  },
  successmsg: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: SUCCESS_COLOR,
    height: 30,
    color: TEXT_DARK,
  },
});
