import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Headers from '../component/Headers';
import {SECONDARY_COLOR, TEXT_LIGHT} from '../styles/const';
import ButtonTransaction from '../component/ButtonTransaction';
import styles from '../styles/global';
import Card from '../component/Card';

const data = [
  {name: 'Alex', type: 'Send', image: null, amount: 1000},
  {name: 'Ali', type: 'Receive', image: null, amount: 1000},
  {name: 'Buro', type: 'Send', image: null, amount: 1000},
  {name: 'Bani', type: 'Receive', image: null, amount: 1000},
  {name: 'Bani', type: 'Receive', image: null, amount: 1000},
];

const Home = ({navigation}) => {
  return (
    <>
      <View contentContainerStyle={styles.wrapper}>
        <Headers textTitle="Gojo Dan" image="" icon={true} subText="Hello" />
        <View style={styleLocal.wrapBalance}>
          <View style={styleLocal.wrapText}>
            <Text style={styles.textBalance}>Balance</Text>
            <Text style={styles.textSaldo}>Rp 100.000</Text>
            <Text style={styleLocal.textNum}>08347235342</Text>
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
            action={() => navigation.navigate('TopUp')}
          />
        </View>
        <View style={styles.wrapTextHome}>
          <Text style={styles.homeText18px}>Transaction History</Text>
          <TouchableOpacity>
            <Text style={styles.text14pxSec}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
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
