import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  currentUser,
  updateUser,
} from './authOperations';

const initialState = {
  user: {
    email: null,
    password: null,
  },
  token: null,
  isLoggedIn: false,
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
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, _) => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user.email = null;
        state.user.password = null;
        state.token = null;
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
      }),
});
