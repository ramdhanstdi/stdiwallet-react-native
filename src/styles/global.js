import {Dimensions, StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_DARK,
  TEXT_LIGHT,
  WARNING_COLOR,
} from './const';

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
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    color: TEXT_DARK,
    paddingHorizontal: 15,
  },
  actionFormik: {
    alignItems: 'center',
  },
  formikWrap: {
    flex: 1,
    justifyContent: 'space-between',
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
  warningForm: {
    paddingLeft: 20,
    color: WARNING_COLOR,
  },
});

export default styles;
