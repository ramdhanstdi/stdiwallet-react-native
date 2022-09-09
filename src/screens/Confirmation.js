import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {getUserLogin} from '../redux/asyncAction/profile';
import {useDispatch, useSelector} from 'react-redux';
import {DEFAULT_IMG} from '../assets/defaultimg';
import {CARD_COLOR, TEXT_DARK} from '../styles/const';
import {getdate, resetmsg} from '../redux/reducers/transaction';
import {getToken} from '../redux/asyncAction/token';

const Confirmation = ({navigation}) => {
  const dispatch = useDispatch();
  const [warning, setWarning] = React.useState(false);
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);
  const name = useSelector(state => state.transaction.name);
  const image = useSelector(state => state.transaction.image);
  const phone = useSelector(state => state.transaction.phone);
  const amount = useSelector(state => state.transaction.amount);
  const receiver = useSelector(state => state.transaction.receiver);
  const date = new Date().toISOString();
  console.log(amount);
  const notes = useSelector(state => state.transaction.notes);
  const onSubmit = val => {
    dispatch(getdate(date));
    dispatch(getToken(receiver));
    if (profile.balance - amount < 0) {
      setWarning(true);
      setTimeout(() => setWarning(false), 3 * 3000);
    } else {
      navigation.navigate('Enter Your Pin');
    }
  };
  React.useEffect(() => {
    dispatch(resetmsg());
    dispatch(getUserLogin(token));
  }, []);
  return (
    <>
      {warning && <Text style={styles.warning}>Amount is Not Enough</Text>}
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
      <ScrollView style={styles.wrapDetails}>
        <Text style={styles.homeText18px}>Details</Text>
        <CardDetails smalText="Amount" bigText={amount} />
        <CardDetails
          smalText="Balance Left"
          bigText={profile.balance - amount}
        />
        <CardDetails smalText="Date & Time" bigText={date} />
        <CardDetails smalText="Notes" bigText={notes} />
        <View style={styles.button}>
          <ButtonAuth text="Confirm" action={onSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

const styleLocal = StyleSheet.create({
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

export default Confirmation;
