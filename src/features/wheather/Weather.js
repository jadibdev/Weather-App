import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from './weatherSlice';

let apiCalled = false;

const Weather = () => {
 
  return (
    <div>
      <p>Temp: </p>
      <p>Description: </p>
    </div>
  )
}

export default Weather