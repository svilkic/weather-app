import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllCity,
  getCityLatLongImageUrban,
  getWeekForcast,
} from '../../helper/api';

const initialState = {
  lat: 0,
  lon: 0,
  fetchingImage: true,
  fetching: true,
  city: 0,
  cities: [],
  image: '',
  currentForecast: {},
  weekForecast: [],
  lastUpdate: JSON.stringify(new Date()),
};

//Fetch weather
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }) => {
    const { current, daily } = await getWeekForcast(lat, lon);
    return { currentForecast: current, weekForecast: daily, lat, lon };
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
    setFetchingImage(state, action) {
      state.fetchingImage = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setLastUpdate(state, action) {
      state.lastUpdate = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload.cities;
      state.fetching = false;
      state.fetchingImage = false;
    });
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.lastUpdate = JSON.stringify(new Date());
      state.currentForecast = action.payload.currentForecast;
      state.weekForecast = action.payload.weekForecast;
      state.fetching = false;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    });
  },
});

export const { setImage, setLastUpdate, setFetchingImage } =
  weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
