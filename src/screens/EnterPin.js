import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormPin} from '../screens/CreatePin';
import {Formik} from 'formik';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {transferTo} from '../redux/asyncAction/transaction';
import {resetmsg} from '../redux/reducers/transaction';

const EnterPin = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const time = useSelector(state => state.transaction.date);
  const amount = useSelector(state => state.transaction.amount);
  const notes = useSelector(state => state.transaction.notes);
  const receiver = useSelector(state => state.transaction.receiver);
  const successmsg = useSelector(state => state.transaction.successmsg);
  const [pin, setPin] = React.useState('');
  const onSubmit = val => {
    const request = {time, amount, notes, receiver};
    dispatch(transferTo({token, request}));
    console.log(pin);
  };
  React.useEffect(() => {
    if (successmsg) {
      dispatch(resetmsg());
      navigation.navigate('StatusSucces');
    }
  }, [successmsg]);
  return (
    <>
      <View style={styleLocal.wrap}>
        <Text style={styles.smallText}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </Text>
      </View>
      <Formik initialValues={{pin: pin}} onSubmit={onSubmit}>
        {props => <FormPin {...props} setPin={setPin} pin={pin} />}
      </Formik>
    </>
  );
};

export default EnterPin;

const styleLocal = StyleSheet.create({
  wrap: {
    margin: 15,
  },
});
