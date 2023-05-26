import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './operationsNotices';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchNotices.pending](state, action) {
      state.isLoading = true;
    },
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;
