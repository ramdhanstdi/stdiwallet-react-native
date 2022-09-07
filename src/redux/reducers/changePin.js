import {createSlice} from '@reduxjs/toolkit';
import {changePin} from '../asyncAction/changePin';

const initialState = {
  errormsg: '',
  successmsg: '',
  pinold: '',
};

const pinChange = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    resetmsg: state => {
      state.errormsg = null;
      state.successmsg = null;
    },
    setpin: (state, action) => {
      state.pinold = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(changePin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(changePin.fulfilled, (state, action) => {
      state.successmsg = action.payload?.massage;
      state.errormsg = action.payload?.error;
    });
  },
});

export default pinChange.reducer;
export const {resetmsg, setpin} = pinChange.actions;
