import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from './features/wheather/weatherSlice';
/* import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from './features/wheather/weatherSlice'; */
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import CityDetail from '../src/components/CityDetail'
import Weather from '../src/features/wheather/Weather'
import Navbar from './components/Navbar';
import Home from './components/Home'
import SanFrancisco from './components/SanFrancisco'

import './App.css';

let apiCalled = false;

function App() {
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.weather);

   useEffect(() => {
    if (apiCalled === false) {
      apiCalled = true;
      dispatch(getWeather());
    }
  }, [dispatch]);
 
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home weather={weather}/>} />
        <Route path="sanfrancisco" element={<SanFrancisco weather={weather}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
