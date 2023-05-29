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
      const { data } = await axios.post('/users/refresh', { refreshToken });
      setAuthHeader(data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      // setAuthHeader(data.token);
      toast.success('registration success');
      localStorage.setItem('refreshToken', data.refreshToken);
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
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      // toast.success(`Welcome, ${data.user.name}!`);
      console.log(data);
      return data;
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        toast.error('incorrect data entered');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const signInWhithToken = createAsyncThunk(
//   'auth/signInWhithToken',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users/login/with-token', credentials);
//       setAuthHeader(data.token);
//       return data;
//     } catch (error) {
//       if (error.response.status === 401 || error.response.status === 500) {
//         toast.error('incorrect data entered');
//       }
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//     localStorage.removeItem('refreshToken');
//     toast.success('Logout successful');
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const refreshToken = localStorage.getItem('refreshToken');
    setAuthHeader(refreshToken);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async (updatedData, thunkAPI) => {
    try {
      const { data } = await axios.put('/users/update', updatedData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    localStorage.removeItem('refreshToken');
    toast.success('Logout successful');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
