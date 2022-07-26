import React from 'react';
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => (
  <div className="nav-container">
    <ul className="nav-list">
      <li><h2>Weather stats</h2></li>
      <li><LocationOnIcon className="black"/></li>
      {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Location stats</NavLink></li> */}
      <li className="blacks"><SettingsIcon /></li>
    </ul>
  </div>
);

export default Navbar;
