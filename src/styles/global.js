import {Dimensions, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK, TEXT_LIGHT} from './const';

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
    height: Dimensions.get('screen').height,
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
    color: TEXT_DARK,
  },
  inputWrap: {
    flex: 1,
  },
  questionText: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    color: TEXT_DARK,
    marginVertical: 15,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default styles;
