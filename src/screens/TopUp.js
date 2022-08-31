import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  CARD_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  TEXT_DARK,
  WARNING_COLOR,
} from '../styles/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {topUp} from '../redux/asyncAction/transaction';
import PushNotification from 'react-native-push-notification';
import {resetmsg} from '../redux/reducers/transaction';
import {getUserLogin} from '../redux/asyncAction/profile';

const CardTopUp = ({number, text}) => {
  return (
    <View style={styleLocal.wraper}>
      <Text style={styleLocal.number}>{number}</Text>
      <Text style={styleLocal.text}>{text}</Text>
    </View>
  );
};

const TopUp = () => {
  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const successmsg = useSelector(state => state.transaction.successmsg);
  const dispatch = useDispatch();
  const submit = () => {
    const request = {amount};
    dispatch(topUp({token, request}));
  };
  React.useEffect(() => {
    if (successmsg) {
      dispatch(resetmsg());
      dispatch(getUserLogin(token));
      setShow(false);
    }
  }, [successmsg]);
  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={styleLocal.wrapHead}
          onPress={() => setShow(!show)}>
          <View style={styleLocal.plus}>
            <Icon name="plus" color={PRIMARY_COLOR} size={25} />
          </View>
          <View>
            <Text style={styleLocal.acount}>Virtual Account Number</Text>
            <Text style={styleLocal.req}>2389 081393877946</Text>
          </View>
        </TouchableOpacity>
        <View style={styleLocal.textWrap}>
          <Text style={styles.textSmall}>
            We provide you virtual account number for top up via nearest ATM.
          </Text>
        </View>
        <Text style={styles.homeText18px}> How to Top-Up</Text>
        <CardTopUp
          number="1"
          text="Go to the nearest ATM or you can use E-Banking."
        />
        <CardTopUp
          number="2"
          text="Type your security number on the
        ATM or E-Banking."
        />
        <CardTopUp number="3" text="Select “Transfer” in the menu" />
        <CardTopUp
          number="4"
          text="Type the virtual account number that
        we provide you at the top."
        />
        <CardTopUp
          number="5"
          text="Type the amount of the money you
        want to top up."
        />
        <CardTopUp number="6" text="Read the summary details" />
        <CardTopUp number="7" text="Press transfer / top up" />
        <CardTopUp
          number="8"
          text="You can see your money in Zwallet
        within 3 hours."
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(!show)}>
        <View style={styleLocal.wrapModal}>
          <Text style={styleLocal.titleModal}>Input Amount Here</Text>
          <TextInput
            style={styleLocal.input}
            keyboardType="decimal-pad"
            placeholder="Min 20000"
            value={amount}
            onChangeText={setAmount}
          />
          <View style={styleLocal.wrapButton}>
            <TouchableOpacity
              style={styleLocal.cancel}
              onPress={() => setShow(!show)}>
              <Text style={styleLocal.acount}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLocal.topUp} onPress={() => submit()}>
              <Text style={styleLocal.acount}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TopUp;

const styleLocal = StyleSheet.create({
  cancel: {
    height: 30,
    backgroundColor: WARNING_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    elevation: 6,
  },
  topUp: {
    height: 30,
    backgroundColor: SUCCESS_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    elevation: 6,
  },
  wrapButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 1,
    fontSize: 18,
    color: TEXT_DARK,
  },
  wrapModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2,
    margin: 50,
    elevation: 4,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 30,
    color: TEXT_DARK,
  },
  wraper: {
    backgroundColor: CARD_COLOR,
    flexDirection: 'row',
    height: 88,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 16,
  },
  number: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: TEXT_DARK,
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  wrapHead: {
    height: 96,
    backgroundColor: CARD_COLOR,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 6,
  },
  plus: {
    width: 56,
    height: 56,
    backgroundColor: TEXT_DARK,
    borderRadius: 15,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: TEXT_DARK,
  },
  req: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: TEXT_DARK,
  },
  textWrap: {
    marginVertical: 15,
  },
});
