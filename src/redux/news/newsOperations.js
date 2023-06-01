import axios from 'axios';


import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchNews = createAsyncThunk(
  '/news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://final-project-yourpe-backend.onrender.com/friends/news.json`);
      return response.data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  },
);


