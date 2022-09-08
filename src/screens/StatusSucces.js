import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CARD_COLOR, SUCCESS_COLOR, TEXT_DARK} from '../styles/const';
import {DEFAULT_IMG} from '../assets/defaultimg';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../redux/asyncAction/profile';

const StatusSucces = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.data);
  const name = useSelector(state => state.transaction.name);
  const image = useSelector(state => state.transaction.image);
  const phone = useSelector(state => state.transaction.phone);
  const amount = useSelector(state => state.transaction.amount);
  const notes = useSelector(state => state.transaction.notes);
  const time = useSelector(state => state.transaction.date);
  const submit = () => {
    navigation.navigate('HomeTab');
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, []);
  return (
    <ScrollView>
      <View style={styleLocal.wrapStatus}>
        <Icon name="check-circle" size={70} color={SUCCESS_COLOR} />
        <Text style={styles.bigText}>Transfer Success</Text>
      </View>
      <View style={styles.wrapDetails}>
        <Text style={styles.homeText18px}> Details</Text>
        <CardDetails smalText="Amount" bigText={amount} />
        <CardDetails smalText="Balance Left" bigText={profile.balance} />
        <CardDetails smalText="Date & Time" bigText={time} />
        <CardDetails smalText="Notes" bigText={notes} />
        <Text style={styles.homeText18px}>Transfer to</Text>
        <View style={styleLocal.side}>
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
        </View>
        <View style={styles.button}>
          <ButtonAuth text="Confirm" action={submit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default StatusSucces;

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
  wrapStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  side: {
    marginLeft: -10,
  },
  wrapLeft: {
    flexDirection: 'row',
  },
});
