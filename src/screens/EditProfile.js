import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import CardDetails from '../component/CardDetails';
import {useDispatch, useSelector} from 'react-redux';
import {editProfile, getUserLogin} from '../redux/asyncAction/profile';
import {Formik} from 'formik';
import ButtonAuth from '../component/ButtonAuth';
import {SUCCESS_COLOR, TEXT_DARK} from '../styles/const';
import {DEFAULT_IMG} from '../assets/defaultimg';
import Icon from 'react-native-vector-icons/FontAwesome';

const FormEdit = ({handleChange, handleSubmit, handleBlur}) => {
  const profile = useSelector(state => state.profile.data);
  return (
    <>
      <Text style={styles.smallText}>First Name</Text>
      <TextInput
        style={styles.bigText}
        onChangeText={handleChange('first_name')}
        onBlur={handleBlur('first_name')}
        placeholder={profile.first_name ? profile.first_name : 'Write Here'}
      />
      <Text style={styles.smallText}>Last Name</Text>
      <TextInput
        style={styles.bigText}
        onChangeText={handleChange('last_name')}
        onBlur={handleBlur('last_name')}
        placeholder={profile.last_name ? profile.last_name : 'Write Here'}
      />
      <ButtonAuth text="Confirm" title="submit" action={handleSubmit} />
    </>
  );
};

const EditProfile = ({navigation}) => {
  const [picture, setPicture] = React.useState('');
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const successmsg = useSelector(state => state.profile.successmsg);
  const submit = val => {
    const request = {first_name: val.first_name, last_name: val.last_name};
    dispatch(editProfile({token, request}));
  };
  React.useEffect(() => {
    if (successmsg) {
      setTimeout(() => dispatch(getUserLogin(token)), 3 * 1000);
    } else {
      dispatch(getUserLogin(token));
    }
  }, [successmsg]);
  return (
    <ScrollView>
      {successmsg && <Text style={styleLocal.successmsg}>{successmsg}</Text>}
      <View style={styles.wrapDetails}>
        <View style={styleLocal.text}>
          <Text style={styles.smallText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, change here.
          </Text>
        </View>
        <View style={styleLocal.wrapPic}>
          <View style={styleLocal.picture}>
            <Image
              source={{
                uri: profile.profile_photo
                  ? profile.profile_photo
                  : DEFAULT_IMG,
                width: 100,
                height: 100,
              }}
            />
          </View>
          <View style={styleLocal.upload}>
            <TouchableOpacity>
              <Icon style={styleLocal.icon} name="folder" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styleLocal.icon} name="camera" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <Formik
          initialValues={{first_name: '', last_name: ''}}
          onSubmit={submit}>
          {props => <FormEdit {...props} />}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styleLocal = StyleSheet.create({
  upload: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 20,
  },
  wrapPic: {
    alignItems: 'center',
  },
  text: {
    marginVertical: 20,
  },
  successmsg: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: SUCCESS_COLOR,
    height: 30,
    color: TEXT_DARK,
  },
  picture: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
