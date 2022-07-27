import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => (
  <div className="nav-container">
    <ul className="nav-list">
      <li><h2>Weather stats</h2></li>
      <li><LocationOnIcon className="black" /></li>
      <li className="blacks"><SettingsIcon /></li>
    </ul>
  </div>
);

export default Navbar;
