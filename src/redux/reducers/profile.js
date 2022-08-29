import {createSlice} from '@reduxjs/toolkit';
import {
  getUserLogin,
  getAllProfile,
  editProfile,
  addNumber,
  changePass,
} from '../asyncAction/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  data: '',
  errormsg: '',
  successmsg: '',
  allprofile: [],
  page: '',
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetmsg: state => {
      state.successmsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getUserLogin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getUserLogin.fulfilled, (state, action) => {
      const data = action.payload?.data;
      if (data) {
        state.data = data;
      }
    });
    build.addCase(getAllProfile.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getAllProfile.fulfilled, (state, action) => {
      const data = action.payload?.data;
      const page = action.payload?.page;
      if (data) {
        state.page = page;
        state.allprofile = data;
      }
    });
    build.addCase(editProfile.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(editProfile.fulfilled, (state, action) => {
      const data = action.payload?.data;
      const successmsg = action.payload?.massage;
      if (data) {
        state.data = data;
        state.successmsg = successmsg;
      }
    });
    build.addCase(addNumber.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(addNumber.fulfilled, (state, action) => {
      const successmsg = action.payload?.massage;
      if (successmsg) {
        state.successmsg = successmsg;
      }
    });
    build.addCase(changePass.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(changePass.fulfilled, (state, action) => {
      const successmsg = action.payload?.massage;
      if (successmsg) {
        state.successmsg = successmsg;
      }
    });
  },
});

export default profile.reducer;
export {getUserLogin};
export const {resetmsg} = profile.actions;
