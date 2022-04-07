import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetching: true,
  town: 0,
  lastUpdate: 0,
  currentForecast: {},
  weekForecast: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
