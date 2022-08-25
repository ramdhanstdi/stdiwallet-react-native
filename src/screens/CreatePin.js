import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useRef} from 'react';
import Auth from '../component/Auth';
import Input from '../component/Input';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {ErrorMessage, Formik} from 'formik';
import {SECONDARY_COLOR, TEXT_DARK} from '../styles/const';
import * as Yup from 'yup';

export const FormPin = ({
  handleBlur,
  handleSubmit,
  handleChange,
  pin,
  setPin,
  maxlength,
}) => {
  const [focus, setFocus] = React.useState(false);
  const handleOnPress = () => {
    setFocus(true);
    textInputRef?.current?.focus();
  };
  const handleOnBlur = () => {
    setFocus(false);
  };
  const pinDigit = new Array(maxlength).fill(0);
  const textInputRef = useRef(null);
  const toPinDigitInput = (_value, index) => {
    const emptyInputChar = ' ';
    const digit = pin[index] || emptyInputChar;
    return (
      <View style={styleLocal.inputDigit} key={index}>
        <Text style={styleLocal.inputText}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={styles.formikWrap}>
      <Pressable style={styleLocal.digitContainer} onPress={handleOnPress}>
        {pinDigit.map(toPinDigitInput)}
      </Pressable>
      <View>
        <View style={styleLocal.hiddenText}>
          <TextInput
            value={pin}
            onChangeText={setPin}
            maxlength={maxlength}
            keyboardType="number-pad"
            returnkeyType="done"
            textContentType="oneTimeCode"
            ref={textInputRef}
            onblur={handleOnBlur}
            name="pin"
          />
        </View>
      </View>
      <View style={styles.actionFormik}>
        <ButtonAuth action={handleSubmit} title="submit" text="Confirm" />
      </View>
    </View>
  );
};

const CreatePin = ({navigation}) => {
  const [pin, setPin] = React.useState('');
  const [pinReady, setPinReady] = React.useState(true);
  const maxlength = 6;
  const onSubmit = val => {
    console.log(val);
    console.log(pin);
    //disini untuk fungsi register lempar ke Crate pin
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Auth />
        <View style={styles.wrapperBody}>
          <View>
            <Text style={styles.authTitle}>Create Security PIN</Text>
          </View>
          <Text style={styles.textSmall}>
            Create a PIN that’s contain 6 digits number for security purpose in
            STD iWallet.
          </Text>
          <Formik initialValues={{pin: ''}} onSubmit={onSubmit}>
            {props => (
              <FormPin
                {...props}
                navigation={navigation}
                setPinReady={setPinReady}
                setPin={setPin}
                pin={pin}
                maxlength={maxlength}
              />
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

export default CreatePin;

const styleLocal = StyleSheet.create({
  hiddenText: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  digitContainer: {
    width: Dimensions.get('screen').width - 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputDigit: {
    borderColor: SECONDARY_COLOR,
    width: 45,
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: TEXT_DARK,
  },
});
