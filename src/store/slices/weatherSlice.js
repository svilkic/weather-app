import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllCity,
  getCityLatLongImageUrban,
  getWeekForcast,
} from '../../helper/api';

const initialState = {
  fetching: true,
  city: 0,
  cities: [],
  image: '',
  currentForecast: {},
  weekForecast: [],
  lastUpdate: 0,
};

//Fetch weather
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }) => {
    const { current, daily } = await getWeekForcast(lat, lon);
    return { currentForecast: current, weekForecast: daily };
  }
);

//Get all cities
export const fetchCities = createAsyncThunk(
  'weather/getAllCities',
  async () => {
    const cities = await getAllCity();
    return { cities };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setImage(state, action) {
      state.image = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload.cities;
      state.fetching = false;
    });
    builder.addCase(fetchCities.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.currentForecast = action.payload.currentForecast;
      state.weekForecast = action.payload.weekForecast;
      state.fetching = false;
    });
  },
});

export const { setImage } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
