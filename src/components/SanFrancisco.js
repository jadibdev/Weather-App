import React from 'react'
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import americaMap from '../assets/united-states-of-america.png'
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EF70A0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 0,
}));

const SanFrancisco = (props) => {
  const { weather } = props;
  console.log('coming from san francisco', weather[0][0].name)
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li><NavLink to="/"><ArrowBackIosIcon /></NavLink></li>
        <li><LocationOnIcon className="white"/></li>
        {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Location stats</NavLink></li> */}
        <li className="white"><SettingsIcon /></li>
      </ul>
      <Box sx={{ width: '100%' }} className="global-container">
        <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height border">
            <Item className="continent_inner__card">
             <ThermostatIcon />
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height">
            <h2>{weather[0][0].main.temp}</h2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default SanFrancisco