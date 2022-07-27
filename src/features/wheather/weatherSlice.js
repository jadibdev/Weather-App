import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
  elevation: '',
  status: null,
};

let coor = [
  {lat: 37.773972, lon: -122.431297}, 
  {lat: -1.286389, lon: 36.817223}, 
  {lat: 52.520008, lon: 13.404954},
  {lat: -33.865143, lon: 151.209900},
  {lat: 31.224361, lon: 121.469170},
  {lat: 40.730610, lon: -73.935242},
]

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async () => {
    let data_arr = []
    for (let i = 0; i < coor.length; i++) {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coor[i].lat}&lon=${coor[i].lon}&appid=f48de47f168dc240cac0626f4f31e5cb`);
      const data = await res.json();
      data_arr.push(data);
    }
    return data_arr
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    /* joinMission(state, action) {
      const localState = state;
      state.joinedMissions.push(action.payload);
      localState.reserved = true;
    },
    cancelMission(state, action) {
      const localState = state;
      localState.joinedMissions = state.joinedMissions.filter((id) => id !== action.payload);
      localState.reserved = false;
    }, */
  },
  extraReducers: {
    [getWeather.pending]: (state) => {
      const localState = state;
      localState.status = 'loading';
    },
    [getWeather.fulfilled]: (state, action) => {
      const localState = state;
      localState.status = 'success';
      localState.weather.push(action.payload);
      console.log('from reducer', action.payload)
    },
    [getWeather.rejected]: (state) => {
      const localState = state;
      localState.status = 'failed';
    },
  },
});

// export const { joinMission, cancelMission } = weatherSlice.actions;
export default weatherSlice.reducer;
