import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://final-project-yourpe-backend.onrender.com/posts/`);
      return response.data.data.posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);