import React from 'react'
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CityDetail = (props) => {
  const { weather } = props;
  return (
    <div className="nav-container">
    <ul className="nav-list">
      <li><NavLink to="/"><ArrowBackIosIcon /></NavLink></li>
      <li><LocationOnIcon className="white"/></li>
      {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Location stats</NavLink></li> */}
      <li className="white"><SettingsIcon /></li>
    </ul>
  </div>
  )
}

export default CityDetail