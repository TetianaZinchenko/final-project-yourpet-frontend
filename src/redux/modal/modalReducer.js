const { createSlice } = require('@reduxjs/toolkit');

const initialState = { type: 0, params: {} };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.type = action.payload.type;
      state.params = action.payload.params;
    },
    closeModal(state, action) {
      state.type = 0;
      state.params = {};
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export const modalsReducer = modalSlice.reducer;
