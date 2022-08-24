import {Dimensions, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, TEXT_DARK, TEXT_LIGHT} from './const';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  wrapperBody: {
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    backgroundColor: TEXT_LIGHT,
    alignItems: 'center',
    height: Dimensions.get('screen').height - 157,
  },
  authTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: TEXT_DARK,
    paddingVertical: 35,
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    marginBottom: 50,
  },
});

export default styles;
