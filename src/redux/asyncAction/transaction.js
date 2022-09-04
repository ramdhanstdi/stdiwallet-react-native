import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import PushNotification from 'react-native-push-notification';
import qs from 'qs';

export const getHistory = createAsyncThunk(
  '/trans/history',
  async ({token, page, sort}) => {
    const results = {};
    try {
      const sorts = sort ? sort : 'DESC';
      const pages = page ? page : 1;
      const {data} = await http(token).get(`/historyTransaction?page=${pages}&sort=${sorts}`);
      console.log(data);
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

export const transferTo = createAsyncThunk(
  '/trans/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).post('/transfer', send);
      console.log(data);
      results.data = data.result;
      results.massage = data.massage;
      PushNotification.localNotification({
        channelId: 'general',
        title: 'STD iWallet',
        message: `${data.massage}`,
      });
      return results;
    } catch (e) {
      console.log(e);
      results.error = e.response.data.massage;
      return results;
    }
  },
);

export const topUp = createAsyncThunk(
  '/trans/topup',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/topUp', send);
      console.log(data);
      results.data = data.result;
      results.massage = data.massage;
      PushNotification.localNotification({
        channelId: 'general',
        title: 'Top Up Success',
        message: 'You Has Been Scammed',
      });
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
