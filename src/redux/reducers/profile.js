import {createSlice} from '@reduxjs/toolkit';
import {getUserLogin, getAllProfile} from '../asyncAction/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  data: '',
  errormsg: '',
  successmsg: '',
  allprofile: '',
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getUserLogin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getUserLogin.fulfilled, (state, action) => {
      const data = action.payload?.data;
      const successmsg = action.payload?.massage;
      if (data) {
        state.data = data;
        state.successmsg = successmsg;
      }
    });
    build.addCase(getAllProfile.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getAllProfile.fulfilled, (state, action) => {
      const data = action.payload?.data;
      const successmsg = action.payload?.massage;
      if (data) {
        state.data = data;
        state.successmsg = successmsg;
      }
    });
  },
});

export default profile.reducer;
export {getUserLogin};
export const {logOut} = profile.actions;
