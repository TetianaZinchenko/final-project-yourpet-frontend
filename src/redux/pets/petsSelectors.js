export const getPets = state => state.pets.items;

export const selectPetIsLoading = state => state.pets.isLoading;

export const selectPetError = state => state.pets.error;

export const selectPetStatus = state => state.pets.status;
