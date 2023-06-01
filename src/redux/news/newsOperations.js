import axios from 'axios';


import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-yourpe-backend.onrender.com';

export const fetchNews = createAsyncThunk(
  '/news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/news');
      return response.data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  },
);


