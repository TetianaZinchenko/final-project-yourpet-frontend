import { createSlice } from '@reduxjs/toolkit';
import {
  // getNotices,
  // getUsersNotices,
  favoriteNotice,
  fetchNotices,
  removeNotice,
} from './noticesOperations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: {
    // fetch all
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
    // favorite
    [favoriteNotice.pending](state, action) {
      state.isLoading = true;
    },
    [favoriteNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      for (let i = 0; i < state.items.length; ++i) {
        if (state.items[i]._id === action.payload._id) {
          state.items[i] = action.payload;
          break;
        }
      }
    },
    [favoriteNotice.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // remove
    [removeNotice.pending](state, action) {
      state.isLoading = true;
    },
    [removeNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      for (let i = 0; i < state.items.length; ++i) {
        if (state.items[i]._id === action.payload._id) {
          state.items.splice(i, 1);
          break;
        }
      }
    },
    [removeNotice.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  }
});

export const { setFilter } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
