import {createSlice} from '@reduxjs/toolkit';
import {getHistory} from '../asyncAction/transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  data: '',
  errormsg: '',
  successmsg: '',
};

export const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getHistory.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getHistory.fulfilled, (state, action) => {
      const data = action.payload?.data;
      const successmsg = action.payload?.massage;
      if (data) {
        state.data = data;
        state.successmsg = successmsg;
      }
    });
  },
});

export default transaction.reducer;
export {getHistory};
export const {logOut} = transaction.actions;
