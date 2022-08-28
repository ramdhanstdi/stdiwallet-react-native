import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getHistory = createAsyncThunk('/auth/login', async token => {
  const results = {};
  try {
    const {data} = await http(token).get('/historyTransaction');
    console.log(data);
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});
