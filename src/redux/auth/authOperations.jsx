import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { selectToken } from './authSelectors';

axios.defaults.baseURL = 'http://localhost:3000/api/users';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/register', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.data.message === 'Email in use') {
        toast.error('This mail is already in use');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        toast.error('incorrect data entered');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInWhithToken = createAsyncThunk(
  'auth/signInWhithToken',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/login/with-token', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        toast.error('incorrect data entered');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get('/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateInfo = createAsyncThunk(
  '/auth/update',
  async (updatedData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/update', updatedData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  ******** Павлика код ********

export const getUser = createAsyncThunk(
  'users/getUser',
  async (userId, thunkAPI) => {
    try {
      const token = selectToken(thunkAPI.getState());
      setAuthHeader(token);

      const { data } = await axios.get(`/users/${userId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUserInfo = createAsyncThunk(
  'user/updateInfo',
  async (updatedData, thunkAPI) => {
    try {
      const token = selectToken(thunkAPI.getState());
      setAuthHeader(token);

      const { data } = await axios.patch('/users/update', updatedData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
