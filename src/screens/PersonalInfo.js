import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardDetails from '../component/CardDetails';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../redux/asyncAction/profile';

const PersonalInfo = ({navigation}) => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [profile]);
  return (
    <ScrollView>
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
        </View>
        <CardDetails smalText="First Name" bigText={profile.first_name} />
        <CardDetails smalText="Last Name" bigText={profile.last_name} />
        <CardDetails smalText="Verified E-mail" bigText={profile.email} />
        <CardDetails
          smalText="Phone Number"
          bigText={profile.num_phone}
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
