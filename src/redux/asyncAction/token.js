import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const saveToken = createAsyncThunk('/token/save', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/token', send);
    console.log(data);
    results.data = data.result;
    return results;
  } catch (e) {
    console.log(e.response.data.massage);
    results.error = e;
    return results;
  }
});

export const editToken = createAsyncThunk(
  '/token/edit',
  async ({token, user_id}) => {
    const results = {};
    try {
      const send = qs.stringify({token, user_id});
      const {data} = await http().patch(`/token/${token}`, send);
      console.log(data);
      results.data = data.result;
      return results;
    } catch (e) {
      console.log(e.response.data.massage);
    }
  },
);

export const getToken = createAsyncThunk('/token/delete', async receiver => {
  const results = {};
  try {
    console.log('INI', receiver);
    const {data} = await http().get(`/token/${receiver}`);
    console.log(data);
    results.data = data.result;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const deleteToken = createAsyncThunk('/token/delete', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().patch('/token', send);
    console.log(data);
    results.data = data.result;
    return results;
  } catch (e) {
    console.log(e);
  }
});
