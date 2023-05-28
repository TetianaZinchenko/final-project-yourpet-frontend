import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectToken } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://final-project-yourpe-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const createSearchParams = params => new URLSearchParams(params).toString();

export const getUsersNotices = createAsyncThunk(
  'notices/getUsersNotices',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/notices?${createSearchParams(params)}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/posts');
      return response.data.data.posts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const favoriteNotice = createAsyncThunk(
  'notices/favorite',
  async (update, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.patch(
        '/posts/favorite/' + update.id,
        update.data
      );
      return data.data.contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/remove',
  async (postId, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.delete('/posts/del/' + postId);
      return data.data.post;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
