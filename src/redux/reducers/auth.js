import {createSlice} from '@reduxjs/toolkit';
import {login, register} from '../asyncAction/auth';
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
    logOut: () => {
      return initialState;
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
      state.errormsg = action.payload?.error;
      if (token) {
        state.token = token;
        state.id = id;
      }
    });
    build.addCase(register.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.successmsg = action.payload?.massage;
    });
  },
});

export default auth.reducer;
export {login};
export const {logOut} = auth.actions;
