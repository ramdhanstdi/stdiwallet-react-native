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
    results.error = e.response.data.massage;
    return results;
  }
});

export const register = createAsyncThunk('/auth/register', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('/auth/register', send);
    console.log(data);
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    results.error = e.response.data.result[0].msg;
    console.log(e.response.data.result[0].msg);
    return results;
  }
});

export const createPin = createAsyncThunk('/auth/createpin', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('/auth/createPin', send);
    console.log(data);
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    return e;
  }
});
