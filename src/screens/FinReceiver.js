import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, TEXT_DARK} from '../styles/const';
import Input from '../component/Input';
import {ErrorMessage, Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../component/Card';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProfile} from '../redux/asyncAction/profile';

const data = [
  {name: 'Alex', type: '08435734', image: null},
  {name: 'Ali', type: '094576357', image: null},
  {name: 'Buro', type: '906780879', image: null},
  {name: 'Bani', type: '5264563456', image: null},
  {name: 'Bani', type: '674687468', image: null},
];

const FormInput = ({handleChange, handleBlur, handleSubmit}) => {
  return (
    <View style={styleLocal.wrapSearch}>
      <Icon name="search" size={24} onPress={handleSubmit} />
      <TextInput
        style={styleLocal.input}
        onBlur={handleBlur('searching')}
        onChangeText={handleChange('searching')}
        name="searching"
        type="text"
        placeholder="Search Here"
      />
    </View>
  );
};

const FinReceiver = ({navigation}) => {
  const allprofile = useSelector(state => state.profile.allprofile);
  const pagination = useSelector(state => state.profile.page);
  let page = pagination.curretPage;
  const dispatch = useDispatch();
  const bool = '';
  const nextPage = () => {
    page++;
    console.log(page);
    dispatch(getAllProfile({page, bool: true}));
  };
  const onRefresh = () => {
    page = 1;
    dispatch(getAllProfile({page}));
  };
  const onSubmit = val => {
    console.log(val);
  };
  const PassingData = (item) => {
    console.log(item);
  };
  return (
    <>
      <View>
        <Formik onSubmit={onSubmit} initialValues={{searching: ''}}>
          {props => <FormInput {...props} />}
        </Formik>
        <Text style={styles.homeText18px}> All Contact</Text>
      </View>
      <FlatList
        onRefresh={() => onRefresh()}
        refreshing={false}
        onEndReached={() => nextPage()}
        onEndReachedThreshold={0.1}
        data={allprofile}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => PassingData(item)}>
            <Card item={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default FinReceiver;

const styleLocal = StyleSheet.create({
  wrapSearch: {
    backgroundColor: PRIMARY_COLOR,
    height: 54,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderBottomColor: TEXT_DARK,
    borderBottomWidth: 1,
    marginLeft: 10,
    flex: 1,
    zIndex: 222,
  },
});
