import axios from 'axios';
import {BACKEND_URL} from '@env';
import {store} from '../redux/store';
import {logOut} from '../redux/reducers/auth';

console.log(BACKEND_URL);
const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const inst = axios.create({
    headers,
    baseURL: BACKEND_URL,
  });

  inst.interceptors.response.use(
    success => {
      console.log(success);
      return success;
    },
    error => {
      if (error.response.status === 401) {
        store.dispatch(logOut());
      }
      return Promise.reject(error);
    },
  );

  return inst;
};

export default http;
