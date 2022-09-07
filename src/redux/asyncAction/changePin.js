import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const changePin = createAsyncThunk(
  '/user/changePin',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/changePin', send);
      console.log(data);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      results.error = e.response.data.massage;
      console.log(e.response.data.massage);
      return results;
    }
  },
);
