import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DEFAULT_IMG} from '../assets/defaultimg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CARD_COLOR, TEXT_DARK} from '../styles/const';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../redux/asyncAction/profile';
import {logOut} from '../redux/reducers/auth';

const CardProfile = ({text, icon, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styleLocal.card}>
      <Text style={styleLocal.textCard}>{text}</Text>
      <Icon name={icon} size={20} color={TEXT_DARK} />
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const profile = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styleLocal.wrapHead}>
          <View style={styleLocal.picture}>
            <Image
              source={{
                uri: profile.profile_photo
                  ? profile.profile_photo
                  : DEFAULT_IMG,
                width: 70,
                height: 70,
              }}
            />
          </View>
          <TouchableOpacity
            style={styleLocal.edit}
            onPress={() => navigation.navigate('Edit Profile')}>
            <Icon name="pencil" size={15} color={TEXT_DARK} />
            <Text style={styleLocal.textEdit}>Edit</Text>
          </TouchableOpacity>
          <Text
            style={
              styleLocal.name
            }>{`${profile.first_name} ${profile.last_name}`}</Text>
          <Text style={styleLocal.number}>{profile.num_phone}</Text>
        </View>
        <CardProfile
          action={() => navigation.navigate('Personal Information')}
          text="Personal Information"
          icon="arrow-right"
        />
        <CardProfile
          text="Change Password"
          icon="arrow-right"
          action={() => navigation.navigate('Change Password')}
        />
        <CardProfile
          text="Change PIN"
          icon="arrow-right"
          action={() => navigation.navigate('Change Pin')}
        />
        <CardProfile text="Notification" />
        <CardProfile text="Logout" action={() => dispatch(logOut())} />
        <Text>{'\n'}</Text>
      </ScrollView>
    </>
  );
};

export default Profile;

const styleLocal = StyleSheet.create({
  wrapHead: {
    alignItems: 'center',
    marginTop: 68,
  },
  picture: {
    borderRadius: 35,
    overflow: 'hidden',
  },
  edit: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 16,
    lineHeight: 27,
    fontWeight: '400',
    marginLeft: 10,
    color: TEXT_DARK,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: TEXT_DARK,
  },
  number: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
    color: TEXT_DARK,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    height: 58,
    backgroundColor: CARD_COLOR,
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  textCard: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: TEXT_DARK,
  },
});
