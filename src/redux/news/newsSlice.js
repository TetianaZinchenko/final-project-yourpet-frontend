import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';


const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload;

      })
      .addCase(fetchNews.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});


export const newsReducer = newsSlice.reducer;
