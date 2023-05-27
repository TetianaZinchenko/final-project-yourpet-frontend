import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { selectToken } from './authSelectors';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'


const setAuthHeader = token=> {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = ()=> {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk

('auth/signUp', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error.response.data.message === 'Email in use') {

      toast.error('This mail is already in use')

    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 500) {
      toast.error('Incorrect data entered');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signInWhithToken = createAsyncThunk('auth/signInWhithToken', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login/with-token', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 500) {

      toast.error('Incorrect data entered')

    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


