import { weatherReducer } from './slices/weatherSlice';
import { uiReducer } from './slices/uiSlice';

const { configureStore } = require('@reduxjs/toolkit');

const reducer = {
  weather: weatherReducer,
  ui: uiReducer,
};

export const store = configureStore({
  reducer,
});
