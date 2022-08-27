import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardDetails from '../component/CardDetails';

const PersonalInfo = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
        </View>
        <CardDetails smalText="First Name" bigText="Gojo" />
        <CardDetails smalText="Last Name" bigText="Dan" />
        <CardDetails smalText="Verified E-mail" bigText="gojodan@gmail.com" />
        <CardDetails
          smalText="Phone Number"
          bigText="08834254411"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;

const styleLocal = StyleSheet.create({
  text: {
    marginVertical: 15,
  },
});
