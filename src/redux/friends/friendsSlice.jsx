import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchFriends.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload;
        
      })
      .addCase(fetchFriends.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;