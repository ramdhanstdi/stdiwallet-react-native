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

export const editProfile = createAsyncThunk(
  '/profile/edit',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/profile', send);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const uploadPhoto = createAsyncThunk(
  '/profile/upload',
  async ({token, request}) => {
    const results = {};
    try {
      console.log(request);
      const form = new FormData();
      form.append('photo', {
        uri: request.uri,
        name: request.name,
        type: request.type,
      });
      const {data} = await http(token).patch('/profile', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const addNumber = createAsyncThunk(
  '/profile/AddNumber',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      console.log(send);
      const {data} = await http(token).patch('/number', send);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e.response.data.result);
      return e;
    }
  },
);

export const changePass = createAsyncThunk(
  '/profile/changePass',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/changePassword', send);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e.response.data.massage);
      results.error = e.response.data.massage;
      return results;
    }
  },
);

export const getAllProfile = createAsyncThunk(
  '/profile/all',
  async ({page, search}) => {
    const results = {};
    const pages = page ? page : 1;
    const searching = search ? search : '';
    console.log(page);
    try {
      const {data} = await http().get(`/admin/profile?page=${pages}&search=${searching}`);
      results.data = data.result;
      results.page = data?.pageInfo;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
