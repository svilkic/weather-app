import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastSelectedCity: 0,
  language: 'en',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
