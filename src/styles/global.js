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
    justifyContent: 'center',
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
  wrapTextHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 13,
  },
  homeText18px: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
    color: TEXT_DARK,
    marginLeft: 10,
  },
  text14pxSec: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: SECONDARY_COLOR,
  },
  text14px: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: SECONDARY_COLOR,
  },
  textSaldo: {
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_LIGHT,
    lineHeight: 33,
    paddingVertical: 10,
  },
  textBalance: {
    fontSize: 14,
    fontWeight: '400',
    color: TEXT_LIGHT,
    lineHeight: 19,
  },
  bigText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '700',
    color: TEXT_DARK,
    marginTop: 8,
  },
  smallText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: TEXT_DARK,
  },
  wrapDetails: {
    paddingLeft: 10,
  },
  button: {
    paddingLeft: 10,
  },
  wrapList: {
    alignItems: 'center',
  },
});

export default styles;
