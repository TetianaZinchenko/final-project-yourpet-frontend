import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  signInWhithToken,
} from './authOperations';


const initialState = {
  user: {
    email: null,
    id: null,
    password: null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, (state, _) => state)
      .addCase(signUp.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.pending, (state, _) => state)
      .addCase(signIn.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signInWhithToken.pending, (state, _) => state)
      .addCase(signInWhithToken.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signInWhithToken.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});
