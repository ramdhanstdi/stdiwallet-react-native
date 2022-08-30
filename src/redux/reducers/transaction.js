import {createSlice} from '@reduxjs/toolkit';
import {getHistory, transferTo, topUp} from '../asyncAction/transaction';

const initialState = {
  data: '',
  errormsg: '',
  successmsg: '',
  name: '',
  phone: '',
  image: '',
  receiver: '',
  amount: '',
  notes: '',
  date: '',
};

export const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getname: (state, action) => {
      state.name = action.payload;
    },
    getphone: (state, action) => {
      state.phone = action.payload;
    },
    getimage: (state, action) => {
      state.image = action.payload;
    },
    getreceiver: (state, action) => {
      state.receiver = action.payload;
    },
    getamount: (state, action) => {
      state.amount = action.payload;
    },
    getnotes: (state, action) => {
      state.notes = action.payload;
    },
    getdate: (state, action) => {
      state.date = action.payload;
    },
    resetmsg: state => {
      state.errormsg = null;
      state.successmsg = null;
    },
  },
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
    build.addCase(transferTo.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(transferTo.fulfilled, (state, action) => {
      state.successmsg = action.payload?.massage;
    });
    build.addCase(topUp.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(topUp.fulfilled, (state, action) => {
      state.successmsg = action.payload?.massage;
    });
  },
});

export default transaction.reducer;
export {getHistory};
export const {
  getimage,
  getname,
  getphone,
  getreceiver,
  getamount,
  getnotes,
  getdate,
  resetmsg,
} = transaction.actions;
