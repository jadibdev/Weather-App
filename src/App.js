import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
/* import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from './features/wheather/weatherSlice'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getWeather } from './features/wheather/weatherSlice';
import Home from './components/Home';
import SanFrancisco from './components/SanFrancisco';
import Nairobi from './components/Nairobi';
import Mitte from './components/Mitte';
import Sydney from './components/Sydney';
import Shanghai from './components/Shanghai';
import LongIsland from './components/LongIsland';

import './App.css';

let apiCalled = false;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (apiCalled === false) {
      apiCalled = true;
      dispatch(getWeather());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sanfrancisco" element={<SanFrancisco />} />
        <Route path="nairobi" element={<Nairobi />} />
        <Route path="mitte" element={<Mitte />} />
        <Route path="sydney" element={<Sydney />} />
        <Route path="shanghai" element={<Shanghai />} />
        <Route path="longisland" element={<LongIsland />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
