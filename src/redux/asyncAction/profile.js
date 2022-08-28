import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getUserLogin = createAsyncThunk('/profile/login', async token => {
  const results = {};
  try {
    const {data} = await http(token).get('/profile');
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const getAllProfile = createAsyncThunk('/profile/all', async () => {
  const results = {};
  try {
    const {data} = await http().get('/admin/profile');
    results.data = data.result;
    results.massage = data.massage;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});
