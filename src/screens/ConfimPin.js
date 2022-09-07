import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormPin} from '../screens/CreatePin';
import {Formik} from 'formik';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {changePin} from '../redux/asyncAction/changePin';
import {resetmsg} from '../redux/reducers/changePin';

const ConfimPin = ({navigation}) => {
  const [newPin, setPin] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const oldPin = useSelector(state => state.changePin.pinold);
  const errormsg = useSelector(state => state.changePin.errormsg);
  const successmsg = useSelector(state => state.changePin.successmsg);
  const dispatch = useDispatch();
  const onSubmit = val => {
    const request = {oldPin, newPin};
    dispatch(changePin({token, request}));
  };
  React.useEffect(() => {
    if (errormsg || successmsg) {
      setTimeout(() => dispatch(resetmsg()), 3000);
    }
  }, [errormsg, successmsg]);
  return (
    <>
      {errormsg && <Text style={styles.warning}>{errormsg}</Text>}
      {successmsg && <Text style={styles.successmsg}>{successmsg}</Text>}
      <View style={styleLocal.wrap}>
        <Text style={styles.smallText}>
          Type your new 6 digits security PIN to use in STD iWallet.
        </Text>
      </View>
      <Formik initialValues={{pin: ''}} onSubmit={onSubmit}>
        {props => <FormPin {...props} setPin={setPin} pin={newPin} />}
      </Formik>
    </>
  );
};

export default ConfimPin;

const styleLocal = StyleSheet.create({
  wrap: {
    margin: 15,
  },
});
