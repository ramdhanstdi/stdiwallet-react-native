import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../component/Card';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SECONDARY_COLOR,
  SUCCESS_COLOR,
  TEXT_LIGHT,
  WARNING_COLOR,
} from '../styles/const';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../redux/asyncAction/transaction';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const history = useSelector(state => state.transaction.data);
  const pagination = useSelector(state => state.transaction.page);
  let page = pagination.curretPage;
  let next = pagination.nextPage;
  const nextPage = () => {
    if (next === null) {
      console.log('page empty');
    } else {
      page++;
      console.log(page);
      dispatch(getHistory({token, page}));
    }
  };
  const onRefresh = () => {
    dispatch(getHistory({token}));
  };
  React.useEffect(() => {
    dispatch(getHistory({token}));
  }, []);
  return (
    <>
      <View style={styleLocal.wrap}>
        <Text style={styles.text14px}>This Month</Text>
      </View>
      <FlatList
        onRefresh={() => onRefresh()}
        refreshing={false}
        onEndReached={() => nextPage()}
        onEndReachedThreshold={0.5}
        data={history}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Card item={item} />
          </TouchableOpacity>
        )}
      />
      <View style={styleLocal.wrapButton}>
        <View style={styleLocal.buttonLeft}>
          <View style={styleLocal.button}>
            <Icon name="arrow-up" color={WARNING_COLOR} size={25} />
          </View>
          <View style={styleLocal.button}>
            <Icon name="arrow-down" color={SUCCESS_COLOR} size={25} />
          </View>
        </View>
        <View style={styleLocal.buttonRight}>
          <Text style={styleLocal.Text}>Filter By Date</Text>
        </View>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  wrap: {
    padding: 10,
  },
  wrapButton: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  buttonLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 57,
    height: 57,
    borderRadius: 15,
    margin: 10,
  },
  buttonRight: {
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    borderRadius: 15,
    height: 57,
    margin: 10,
    flex: 1,
  },
  Text: {
    color: TEXT_LIGHT,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default History;
