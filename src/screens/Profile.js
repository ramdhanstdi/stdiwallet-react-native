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

const CardProfile = ({text, icon, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styleLocal.card}>
      <Text style={styleLocal.textCard}>{text}</Text>
      <Icon name={icon} size={20} color={TEXT_DARK} />
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styleLocal.wrapHead}>
        <Image source={{uri: DEFAULT_IMG, width: 70, height: 70}} />
        <TouchableOpacity style={styleLocal.edit}>
          <Icon name="pencil" size={15} color={TEXT_DARK} />
          <Text style={styleLocal.textEdit}>Edit</Text>
        </TouchableOpacity>
        <Text style={styleLocal.name}>Robert Chandler</Text>
        <Text style={styleLocal.number}>+62 813-9387-7946</Text>
      </View>
      <CardProfile
        action={() => navigation.navigate('Personal Information')}
        text="Personal Information"
        icon="arrow-right"
      />
      <CardProfile text="Change Password" icon="arrow-right" />
      <CardProfile text="Change PIN" icon="arrow-right" />
      <CardProfile text="Notification" />
      <CardProfile text="Logout" />
      <Text>{'\n'}</Text>
    </ScrollView>
  );
};

export default Profile;

const styleLocal = StyleSheet.create({
  wrapHead: {
    alignItems: 'center',
    marginTop: 68,
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
