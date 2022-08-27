import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {DEFAULT_IMG} from '../assets/defaultimg';
import {SECONDARY_COLOR, TEXT_DARK} from '../styles/const';
import Icon from 'react-native-vector-icons/FontAwesome';

const Headers = ({textTitle, subText, image, icon}) => {
  const show = false;
  return (
    <>
      <View style={styleLocal.wrapper}>
        <View style={styleLocal.contentHead}>
          <View style={styleLocal.contentHead}>
            {image ? (
              <Image source={{uri: image, width: 50, height: 50}} />
            ) : (
              <Image source={{uri: DEFAULT_IMG, width: 50, height: 50}} />
            )}
            <View style={styleLocal.textHead}>
              <Text style={styleLocal.textTitle}>{subText}</Text>
              <Text style={styleLocal.subText}>{textTitle}</Text>
            </View>
          </View>
          {icon ? <Icon name="bell-o" color={TEXT_DARK} size={30} /> : null}
        </View>
      </View>
    </>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    height: 112,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  contentHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHead: {
    paddingLeft: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: TEXT_DARK,
  },
  subText: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_DARK,
  },
});

export default Headers;
