import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterTerm: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTerm(state, { payload }) {
      state.filterTerm = payload;
    },
  },
});

// To generate action-creators
export const { setFilterTerm } = filterSlice.actions;
// Reducer of slice
export const filterReducer = filterSlice.reducer;
