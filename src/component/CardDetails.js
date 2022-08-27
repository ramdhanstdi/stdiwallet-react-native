import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CARD_COLOR} from '../styles/const';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardDetails = ({smalText, bigText, navigation, icon}) => {
  return (
    <>
      <View style={styleLocal.wrapper}>
        <View>
          <Text style={styles.smallText}>{smalText}</Text>
          <Text style={styles.bigText}>{bigText}</Text>
        </View>
        {smalText === 'Phone Number' ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Manage Number')}>
            <Text>Manage</Text>
          </TouchableOpacity>
        ) : null}
        {icon ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Phone Number')}>
            <Icon name="trash" size={25} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default CardDetails;

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: CARD_COLOR,
    borderRadius: 15,
    marginVertical: 15,
    height: 92,
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
});
