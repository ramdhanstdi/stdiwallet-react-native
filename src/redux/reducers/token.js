import {createSlice} from '@reduxjs/toolkit';
import {saveToken, editToken, getToken} from '../asyncAction/token';

const initialState = {
  token: '',
  receiverToken: '',
};

const tokenDevice = createSlice({
  name: 'tokenDevice',
  initialState,
  reducers: {
    resetToken: state => {
      state.receiverToken = null;
    },
  },
  extraReducers: build => {
    build.addCase(getToken.pending, state => {
      state.receiverToken = null;
    });
    build.addCase(getToken.fulfilled, (state, action) => {
      state.receiverToken = action.payload?.data.token;
    });
  },
});

export default tokenDevice.reducer;
export const {resetToken} = tokenDevice.actions;
