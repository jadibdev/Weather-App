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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      <h2 style={{marginLeft: '10px'}}>San Francisco weather stats</h2>
      <Box sx={{ width: '100%' }} className="global-container">
        <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Temperature</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Wind Speed</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Wind Deg</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Visibility</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Latitude</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Longitude</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Max Temp</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Min Temp</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Humidity</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][0].main.temp}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default SanFrancisco