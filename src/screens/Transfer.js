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
import {TEXT_DARK} from '../styles/const';

const data = [{name: 'Alex', type: '08435734', image: null}];

const FormInput = ({handleChange, handleBlur, handleSubmit}) => {
  return (
    <View style={styleLocal.wrapSearch}>
      <Icon name="pencil" size={24} onPress={handleSubmit} />
      <TextInput
        style={styleLocal.input}
        onBlur={handleBlur('searching')}
        onChangeText={handleChange('searching')}
        name="searching"
        placeholder="Write Notes"
        type="text"
      />
    </View>
  );
};

const Transfer = () => {
  const onSubmit = val => {
    console.log(val);
  };
  return (
    <>
      <View style={styleLocal.wrapHead}>
        <FlatList data={data} renderItem={Card} />
      </View>
      <Formik onSubmit={onSubmit} initialValues={{searching: ''}}>
        {props => <FormInput {...props} />}
      </Formik>
    </>
  );
};

export default Transfer;

const styleLocal = StyleSheet.create({
  wrapHead: {
    marginVertical: 20,
  },
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
    zIndex: 222,
  },
});
