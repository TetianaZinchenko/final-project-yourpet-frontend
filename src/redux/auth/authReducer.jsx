import { createSlice } from '@reduxjs/toolkit';

import {
  signUp,
  signIn,
  logOut,
  currentUser,
  updateUser,
  getUser,
} from './authOperations';

const initialState = {
  user: {
    email: null,
    password: null,
    token: null,
  },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.user.token = null;
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data.newUser;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.user.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.data.authentificationUser;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          email: null,
          password: null,
          token: null,
        };
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      .addCase(currentUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.error.message;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        // state.user.password = action.payload.password;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.data.posts;
        state.isLoading = false;
      });
  },
});
