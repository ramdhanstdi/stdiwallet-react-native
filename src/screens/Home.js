import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Headers from '../component/Headers';
import {SECONDARY_COLOR, TEXT_LIGHT} from '../styles/const';
import ButtonTransaction from '../component/ButtonTransaction';
import styles from '../styles/global';
import Card from '../component/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../redux/asyncAction/profile';
import {getHistory} from '../redux/asyncAction/transaction';
import {editToken, saveToken} from '../redux/asyncAction/token';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const id = useSelector(state => state.auth.id);
  const profile = useSelector(state => state.profile.data);
  const history = useSelector(state => state.transaction.data);
  const tokenDevice = useSelector(state => state.token.token);
  React.useEffect(() => {
    dispatch(getUserLogin(token));
    dispatch(getHistory({token}));
    if (tokenDevice) {
      const user_id = id;
      const tokend = tokenDevice;
      dispatch(editToken({token: tokend, user_id}));
    } else {
      const user_id = id;
      const tokend = tokenDevice;
      const request = {token: tokend, user_id};
      dispatch(saveToken(request));
    }
  }, []);
  return (
    <>
      <View contentContainerStyle={styles.wrapper}>
        <Headers
          textTitle={`${profile.first_name} ${profile.last_name}`}
          image={profile.profile_photo}
          icon={true}
          action={() => navigation.navigate('Notification')}
          subText="Hello"
        />
        <View style={styleLocal.wrapBalance}>
          <View style={styleLocal.wrapText}>
            <Text style={styles.textBalance}>Balance</Text>
            <Text style={styles.textSaldo}>{profile.balance}</Text>
            <Text style={styleLocal.textNum}>{profile.num_phone}</Text>
          </View>
        </View>
        <View style={styleLocal.wrapButton}>
          <ButtonTransaction
            icon="arrow-up"
            text="Transfer"
            action={() => navigation.navigate('Find Receiver')}
          />
          <ButtonTransaction
            icon="plus"
            text="Top Up"
            action={() => navigation.navigate('Top Up')}
          />
        </View>
        <View style={styles.wrapTextHome}>
          <Text style={styles.homeText18px}>Transaction History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Text style={styles.text14pxSec}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Card item={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styleLocal = StyleSheet.create({
  wrapBalance: {
    height: 141,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    elevation: 6,
  },
  wrapText: {
    marginHorizontal: 20,
  },
  textNum: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_LIGHT,
    lineHeight: 19,
  },
  wrapButton: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default Home;
