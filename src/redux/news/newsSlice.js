import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

const pendingReducer = state => {
  state.isLoading = true;
};

const fetchNewsSucceesReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, pendingReducer)
      .addCase(fetchNews.fulfilled, fetchNewsSucceesReducer)
      .addCase(fetchNews.rejected, rejectedReducer);
  },
});

export const newsReducer = newsSlice.reducer;
