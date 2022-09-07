import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Auth from '../component/Auth';
import styles from '../styles/global';
import ButtonAuth from '../component/ButtonAuth';
import {Formik} from 'formik';
import {SECONDARY_COLOR, TEXT_DARK, TEXT_LIGHT} from '../styles/const';
import PinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {createPin} from '../redux/asyncAction/auth';
import {resetmsg} from '../redux/reducers/auth';

export const FormPin = ({handleSubmit, setPin}) => {
  const refPin = React.useRef(null);
  const [show, setShow] = React.useState(false);
  return (
    <>
      <View style={styles.formikWrap}>
        <PinView
          pinLength={6}
          ref={refPin}
          onValueChange={value => setPin(value)}
          inputSize={40}
          inputAreaStyle={{marginTop: 50, marginBottom: 30}}
          inputViewFilledStyle={{backgroundColor: SECONDARY_COLOR}}
          showInputText={show}
          buttonTextStyle={{color: TEXT_LIGHT, fontSize: 32}}
          buttonViewStyle={{backgroundColor: SECONDARY_COLOR}}
          onButtonPress={key => {
            if (key === 'custom_left') {
              refPin.current.clearAll();
            }
            if (key === 'custom_right') {
              setShow(!show);
            }
          }}
          customLeftButton={
            <Icon name="chevron-left" size={30} color={SECONDARY_COLOR} />
          }
          customRightButton={
            show ? (
              <Icon name="eye" size={30} color={SECONDARY_COLOR} />
            ) : (
              <Icon name="eye-slash" size={30} color={SECONDARY_COLOR} />
            )
          }
        />
        <View style={styles.actionFormik}>
          <ButtonAuth action={handleSubmit} title="submit" text="Confirm" />
        </View>
      </View>
    </>
  );
};

const CreatePin = ({navigation}) => {
  const [pin, setPin] = React.useState('');
  const successmsg = useSelector(state => state.auth.successmsg);
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const onSubmit = val => {
    console.log(pin);
    const request = {email, pin: pin};
    dispatch(createPin(request));
  };
  React.useEffect(() => {
    dispatch(resetmsg());
    if (successmsg) {
      navigation.navigate('CreatePinSuccess');
    }
  }, [successmsg]);
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
          <Formik initialValues={{pin: pin}} onSubmit={onSubmit}>
            {props => <FormPin {...props} setPin={setPin} pin={pin} />}
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

// export const FormPin = ({
//   handleBlur,
//   handleSubmit,
//   handleChange,
//   pin,
//   setPin,
//   maxlength,
// }) => {
//   const [focus, setFocus] = React.useState(false);
//   const handleOnPress = () => {
//     setFocus(true);
//     textInputRef?.current?.focus();
//   };
//   const handleOnBlur = () => {
//     setFocus(false);
//   };
//   const pinDigit = new Array(maxlength).fill(0);
//   const textInputRef = useRef(null);
//   const toPinDigitInput = (_value, index) => {
//     const emptyInputChar = ' ';
//     const digit = pin[index] || emptyInputChar;
//     return (
//       <View style={styleLocal.inputDigit} key={index}>
//         <Text style={styleLocal.inputText}>{digit}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.formikWrap}>
//       <Pressable style={styleLocal.digitContainer} onPress={handleOnPress}>
//         {pinDigit.map(toPinDigitInput)}
//       </Pressable>
//       <View>
//         <View style={styleLocal.hiddenText}>
//           <TextInput
//             value={pin}
//             onChangeText={setPin}
//             maxlength={maxlength}
//             keyboardType="number-pad"
//             returnkeyType="done"
//             textContentType="oneTimeCode"
//             ref={textInputRef}
//             onblur={handleOnBlur}
//             name="pin"
//             maxLength={6}
//           />
//         </View>
//       </View>
//       <View style={styles.actionFormik}>
//         <ButtonAuth action={handleSubmit} title="submit" text="Confirm" />
//       </View>
//     </View>
//   );
// };
