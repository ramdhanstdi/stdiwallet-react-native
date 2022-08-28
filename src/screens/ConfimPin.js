import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormPin} from '../screens/CreatePin';
import {Formik} from 'formik';
import styles from '../styles/global';

const ConfimPin = ({navigation}) => {
  const [pin, setPin] = React.useState('');
  const onSubmit = val => {
    console.log(val);
    console.log(pin);
    navigation.navigate('Profile');
    //disini untuk fungsi register lempar ke Crate pin
  };
  return (
    <>
      <View style={styleLocal.wrap}>
        <Text style={styles.smallText}>
          Type your new 6 digits security PIN to use in STD iWallet.
        </Text>
      </View>
      <Formik initialValues={{pin: pin}} onSubmit={onSubmit}>
        {props => <FormPin {...props} setPin={setPin} pin={pin} />}
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
