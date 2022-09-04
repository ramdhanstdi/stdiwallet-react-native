import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import profile from './profile';
import transaction from './transaction';
import changePin from './changePin';
import token from './token';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const tokenPersistConfig = {
  key: 'tokendevice',
  storage: AsyncStorage,
};

const persistanceAuthReducer = persistReducer(authPersistConfig, auth);
const persistanceTokenReducer = persistReducer(tokenPersistConfig, token);

const reducer = combineReducers({
  auth: persistanceAuthReducer,
  token: persistanceTokenReducer,
  profile,
  transaction,
  changePin,
});

export default reducer;
