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
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, _) => {
        state.user.token = null;
        state.user.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.data.newUser;
        // state.token = action.payload.data.newUser.token;
        state.isLoggedIn = true;

        // console.log('signUp.fulfilled payload:', action.payload);
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.user.token = null;
        state.user.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.data.authentificationUser;
        // state.user.token = action.payload.data.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        // console.log('signIn.fulfilled payload:', action.payload);
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user.name = null;
        state.user.avatarURL = null;
        state.user.location = null;
        state.user.birthday = null;
        state.user.phone = null;
        state.user.email = null;
        state.user.password = null;
        state.user.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })

      .addCase(currentUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.rejected, (state, _) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
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
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
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
      }),
});
