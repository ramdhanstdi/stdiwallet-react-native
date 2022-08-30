import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {ErrorMessage, Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CARD_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/const';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {getUserLogin} from '../redux/asyncAction/profile';
import {useDispatch, useSelector} from 'react-redux';
import {DEFAULT_IMG} from '../assets/defaultimg';
import {getamount, getnotes} from '../redux/reducers/transaction';
import * as Yup from 'yup';

const amountSchema = Yup.object().shape({
  amount: Yup.number().min(1000).required('Required'),
});

const FormInput = ({errors, handleChange, handleBlur, handleSubmit}) => {
  return (
    <>
      <TextInput
        style={styleLocal.amount}
        placeholder="0.00"
        keyboardType="number-pad"
        onBlur={handleBlur('amount')}
        onChangeText={handleChange('amount')}
      />
      {errors.amount ? (
        <Text style={styles.warningForm}>
          <ErrorMessage name="amount" />
        </Text>
      ) : null}
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

const InputAmount = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);
  const name = useSelector(state => state.transaction.name);
  const image = useSelector(state => state.transaction.image);
  const phone = useSelector(state => state.transaction.phone);
  const onSubmit = val => {
    console.log(val);
    dispatch(getamount(val.amount));
    dispatch(getnotes(val.notes));
    navigation.navigate('Confirmation');
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, []);
  return (
    <>
      <View style={styleLocal.wrapper}>
        <View style={styleLocal.wrapLeft}>
          {image ? (
            <Image source={{uri: image, width: 50, height: 50}} />
          ) : (
            <Image source={{uri: DEFAULT_IMG, width: 50, height: 50}} />
          )}
          <View style={styleLocal.wrapText}>
            <Text style={styleLocal.textName}>{name}</Text>
            <Text style={styles.text14px}>{phone}</Text>
          </View>
        </View>
      </View>
      <View style={styleLocal.wrapInput}>
        <Text style={styles.text14px}>{profile.balance}</Text>
        <Formik
          validationSchema={amountSchema}
          initialValues={{amount: '', notes: ''}}
          onSubmit={onSubmit}>
          {props => <FormInput {...props} />}
        </Formik>
      </View>
    </>
  );
};

export default InputAmount;

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
    height: Dimensions.get('screen').height / 2 - 50,
  },
  wrapper: {
    height: 96,
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    backgroundColor: CARD_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  textName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: TEXT_DARK,
  },
  wrapText: {
    marginLeft: 15,
  },
  wrapLeft: {
    flexDirection: 'row',
  },
});
