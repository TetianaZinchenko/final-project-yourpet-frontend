import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectToken } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://final-project-yourpe-backend.onrender.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmY3ZWQzMDk3YTYxMGVhMWM5MWU3YiIsImlhdCI6MTY4NTM1OTE4OSwiZXhwIjoxNjg1MzYyNzg5fQ.jY3cVwwO2sbdBl2poEzoRXG_rv85U4Wu4bnjgzGtlXk';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    // const token = selectToken(thunkAPI.getState());

    // if (!token) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('/pet');
      return data.data.posts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.delete('/pet/del/' + petId);
      return data.data.post;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (petInfo, thunkAPI) => {
    const token = selectToken(thunkAPI.getState());

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.post('/pet/add/' + petInfo);
      return data.data.post;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
