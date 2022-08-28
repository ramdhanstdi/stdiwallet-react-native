import {createSlice} from '@reduxjs/toolkit';
import {login} from '../asyncAction/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  id: '',
  errormsg: '',
  successmsg: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.token = null;
      AsyncStorage.removeItem('auth');
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.data?.token;
      const id = action.payload?.data?.id;
      if (token) {
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('id', id);
        state.token = token;
        state.id = id;
      }
    });
  },
});

export default auth.reducer;
export {login};
export const {logOut} = auth.actions;
