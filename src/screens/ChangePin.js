import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormPin} from '../screens/CreatePin';
import {Formik} from 'formik';
import styles from '../styles/global';
import {useDispatch} from 'react-redux';
import {setpin} from '../redux/reducers/changePin';
import {CommonActions} from '@react-navigation/native';

const ChangePin = ({navigation}) => {
  const dispatch = useDispatch();
  const [pin, setPin] = React.useState('');
  const onSubmit = val => {
    dispatch(setpin(pin));
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'HomeTab'}, {name: 'New Pin'}],
      }),
    );
  };
  return (
    <>
      <View style={styleLocal.wrap}>
        <Text style={styles.smallText}>
          Enter your current 6 digits STD iWallet PIN below to continue to the
          next steps.
        </Text>
      </View>
      <Formik initialValues={{pin: pin}} onSubmit={onSubmit}>
        {props => <FormPin {...props} setPin={setPin} pin={pin} />}
      </Formik>
    </>
  );
};

export default ChangePin;

const styleLocal = StyleSheet.create({
  wrap: {
    margin: 15,
  },
});
