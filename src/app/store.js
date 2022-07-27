/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/wheather/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
