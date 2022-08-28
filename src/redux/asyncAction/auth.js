import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const login = createAsyncThunk('/auth/login', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('/auth/login', send);
    console.log(data);
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});
