import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import weatherReducer from '../features/wheather/weatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
  },
});
