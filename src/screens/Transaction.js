import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {SECONDARY_COLOR, SUCCESS_COLOR, WARNING_COLOR} from '../styles/const';
import styles from '../styles/global';
import {GRAPHIC} from '../assets/defaultimg';
import Card from '../component/Card';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../redux/asyncAction/transaction';

const Transaction = ({navigation}) => {
  const history = useSelector(state => state.transaction.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getHistory({token}));
  }, []);
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              <View style={styleLocal.wrapper}>
                <View style={styleLocal.wrapInner}>
                  <Icon
                    name="arrow-down"
                    color={SUCCESS_COLOR}
                    size={25}
                    style={styleLocal.iconStyle}
                  />
                  <Text style={styles.textBalance}>Income</Text>
                  <Text style={styles.textSaldo}>120000</Text>
                </View>
                <View style={styleLocal.wrapInner}>
                  <Icon
                    name="arrow-up"
                    color={WARNING_COLOR}
                    size={25}
                    style={styleLocal.iconStyle}
                  />
                  <Text style={styles.textBalance}>Expense</Text>
                  <Text style={styles.textSaldo}>120000</Text>
                </View>
              </View>
              <Image
                style={styleLocal.graphic}
                source={{
                  uri: GRAPHIC,
                  width: Dimensions.get('screen').width - 50,
                  height: 250,
                }}
              />
              <View style={styles.wrapTextHome}>
                <Text style={styles.homeText18px}>Transaction History</Text>
                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                  <Text style={styles.text14pxSec}>See all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
        style={styleLocal.wrapCard}
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

export default Transaction;

const styleLocal = StyleSheet.create({
  scrollView: {
    height: (Dimensions.get('screen').height * 2) / 6,
  },
  wrapCard: {
    flex: 1,
  },
  wrapper: {
    height: 130,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: SECONDARY_COLOR,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    flexDirection: 'row',
  },
  wrapInner: {
    padding: 15,
    flex: 1,
  },
  iconStyle: {
    paddingBottom: 10,
  },
  graphic: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
