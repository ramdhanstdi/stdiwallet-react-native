import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDetails from '../component/CardDetails';
import styles from '../styles/global';

const ManageNumber = ({navigation}) => {
  return (
    <>
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
        </View>
        <CardDetails
          smalText="Primary"
          bigText="+6281393877946"
          icon={true}
          navigation={navigation}
        />
      </View>
    </>
  );
};

export default ManageNumber;

const styleLocal = StyleSheet.create({
  text: {
    marginVertical: 15,
  },
});
