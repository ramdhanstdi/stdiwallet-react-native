import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Card from '../component/Card';
import {ErrorMessage, Formik} from 'formik';
import Input from '../component/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SECONDARY_COLOR, TEXT_DARK} from '../styles/const';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';

const data = [{name: 'Alex', type: '08435734', image: null}];

const FormInput = ({handleChange, handleBlur, handleSubmit}) => {
  return (
    <>
      <TextInput
        style={styleLocal.amount}
        placeholder="0.00"
        keyboardType="number-pad"
        onBlur={handleBlur('amount')}
        onChangeText={handleChange('amount')}
        name="amount"
      />
      <View style={styleLocal.wrapFinish}>
        <View style={styleLocal.wrapSearch}>
          <Icon name="pencil" size={24} />
          <TextInput
            style={styleLocal.input}
            onBlur={handleBlur('notes')}
            onChangeText={handleChange('notes')}
            name="notes"
            placeholder="Write Notes"
          />
        </View>
        <View style={styleLocal.ButtonAuth}>
          <ButtonAuth title="submit" action={handleSubmit} text="Confirm" />
        </View>
      </View>
    </>
  );
};

const Transfer = ({navigation}) => {
  const onSubmit = val => {
    console.log(val);
    navigation.navigate('Confirmation');
  };
  return (
    <>
      <View style={styles.wrapList}>
        <FlatList data={data} renderItem={Card} />
      </View>
      <View style={styleLocal.wrapInput}>
        <Text style={styles.text14px}>Rp. 12000 Available</Text>
        <Formik onSubmit={onSubmit} initialValues={{amount: '', notes: ''}}>
          {props => <FormInput {...props} />}
        </Formik>
      </View>
    </>
  );
};

export default Transfer;

const styleLocal = StyleSheet.create({
  wrapSearch: {
    height: 54,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderBottomColor: TEXT_DARK,
    borderBottomWidth: 1,
    marginLeft: 10,
    flex: 1,
  },
  amount: {
    fontSize: 40,
    textAlign: 'center',
    color: SECONDARY_COLOR,
  },
  wrapInput: {
    alignItems: 'center',
    marginTop: 30,
  },
  wrapFinish: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Dimensions.get('screen').height / 2,
  },
});
