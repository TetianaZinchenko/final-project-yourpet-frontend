import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addPet } from './petsOperations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchPets.pending](state, action) {
      state.isLoading = true;
    },
    [fetchPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPets.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deletePet.pending](state, action) {
      state.isLoading = true;
    },
    [deletePet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      let newPets = state.items.filter(pet => pet.id !== action.payload.id);
      state.items = newPets;
    },
    [deletePet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addPet.pending](state) {
      state.isLoading = true;
    },
    [addPet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const petsReducer = petsSlice.reducer;
