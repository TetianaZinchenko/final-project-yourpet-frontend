import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  logOut,
  refreshUser,
  signInWhithToken,
  updateInfo,
  getUser,
} from './authOperations';

const initialState = {
  user: {
    id: null,
    email: null,
    name: '',
    password: '',
    birthday: '',
    phone: '',
    location: '',
    avatarURL: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state, _) => state)
      .addCase(signUp.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.email = payload.dataUser.email;
        state.user.password = payload.dataUser.password;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.pending, (state, _) => state)
      .addCase(signIn.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.email = payload.dataUser.email;
        state.user.password = payload.dataUser.password;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(signInWhithToken.pending, (state, _) => state)
      .addCase(signInWhithToken.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signInWhithToken.fulfilled, (state, { payload }) => {
        state.user.email = payload.dataUser.email;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })
      .addCase(updateInfo.pending, (state, _) => state)
      .addCase(updateInfo.rejected, (state, _) => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(updateInfo.fulfilled, (state, { payload }) => {
        state.user.email = payload.dataUser.email;
        state.user.password = payload.dataUser.password;
        state.token = payload.dataUser.token;
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
        state.user.email = payload.dataUser.email;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getUser.pending, (state, _) => state)
      .addCase(getUser.rejected, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.birthday = payload.dataUser.birthday;
        state.user.phone = payload.dataUser.phone;
        state.user.location = payload.dataUser.location;
        state.user.avatarURL = payload.dataUser.avatarURL;
      });
  },
});
