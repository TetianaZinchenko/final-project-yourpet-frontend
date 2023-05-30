import { createSlice } from '@reduxjs/toolkit';
import {
  createNotice,
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
    status: 0,
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
    // create
    [createNotice.pending](state, action) {
      state.isLoading = true;
      state.status = 1;
    },
    [createNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      state.status = 2;
    },
    [createNotice.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 3;
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    resetStatus(state, action) {
      state.status = 0;
    },
  },
});

export const { setFilter, resetStatus } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
