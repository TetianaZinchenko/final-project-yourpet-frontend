import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addPet } from './petsOperations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: 0,
  },

  extraReducers: {
    [fetchPets.pending](state, action) {
      state.isLoading = true;
      state.status = 1;
    },
    [fetchPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.status = 2;
    },
    [fetchPets.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 3;
    },
    [deletePet.pending](state, action) {
      state.isLoading = true;
      state.status = 1;
    },
    [deletePet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      let newPets = state.items.filter(pet => pet._id !== action.payload._id);
      state.items = newPets;
      state.status = 2;
    },
    [deletePet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 3;
    },
    [addPet.pending](state) {
      state.status = 1;
      state.isLoading = true;
    },
    [addPet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      state.status = 2;
    },
    [addPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 3;
    },
  },

  reducers: {
    resetPetStatus(state, action) {
      state.status = 0;
    },
  },
});

export const { resetPetStatus } = petsSlice.actions;
export const petsReducer = petsSlice.reducer;
