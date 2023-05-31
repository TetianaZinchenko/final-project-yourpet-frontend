import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://final-project-yourpe-backend.onrened.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.interceptors.response.use(
  res => res,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        return Promise.reject(error);
      }
      try {
        const { data } = await axios.post('/users/refresh', { refreshToken });
        setAuthHeader(data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        return axios(error.config);
      } catch (error) {
        toast.error('An error occurred during authentication');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      toast.success('Registration successful');
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      if (error.response.data.message === 'Email in use') {
        toast.error('This email is already in use');
      } else {
        toast.error('An error occurred during registration');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.data.authentificationUser.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      toast.success('Welcome!');
      return data;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        toast.error('Wrong login or password');
      } else {
        toast.error('An error occurred during login');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    localStorage.removeItem('refreshToken');
    localStorage.clear();
    toast.success('Logged out successfully');
  } catch (error) {
    toast.error('An error occurred during logout');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const refreshToken = localStorage.getItem('refreshToken');
    setAuthHeader(refreshToken);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      toast.error('Unable to fetch user');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('An error occurred while fetching user data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async (updatedData, thunkAPI) => {
    try {
      const { data } = await axios.put('/users/update', updatedData, {});
      toast.success('User updated successfully');
      return data;
    } catch (error) {
      toast.error('An error occurred during user update');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/?_id=${userId}`);
      return data;
    } catch (error) {
      // toast.error('An error occurred while fetching user data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
