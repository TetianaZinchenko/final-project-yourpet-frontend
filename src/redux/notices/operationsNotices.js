import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const response = await axios.get(
        'https://final-project-yourpe-backend.onrender.com/posts/'
      );
      return response.data.data.posts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
