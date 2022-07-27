import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
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

const Nairobi = () => {
  // const { weather } = props;
  const { weather } = useSelector((state) => state.weather);
  console.log('from Nairobi', weather)
  return (
    <div className="nav-container" >
      <ul className="nav-list" style={{padding: '20px'}}>
        <li><NavLink to="/"><ArrowBackIosIcon style={{color: 'white'}}/></NavLink></li>
        <li><LocationOnIcon className="white"/></li>
        {/* <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Location stats</NavLink></li> */}
        <li className="white"><SettingsIcon /></li>
      </ul>
      <hr />
      <h2 style={{marginLeft: '10px'}}>Nairobi weather stats</h2>
      <Box sx={{ width: '100%' }} className="global-container" style={{background: '#EF70A0'}}>
        <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Temperature</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{Math.floor((weather[0][1].main.temp - 273.15) * 9/5 + 32)} °F</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{background: '#EC4C8A'}}>
          <Grid item xs={6} className="full-height" style={{background: '#EC4C8A'}}>
            <Item className="continent_inner__card" style={{background: '#EC4C8A'}}>
             <h2>Wind Speed</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height" style={{background: '#EC4C8A'}}>
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', background: '#EC4C8A'}}>
            <h2>{weather[0][1].wind.speed}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Wind Deg</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][1].wind.deg}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  style={{background: '#EC4C8A'}}>
          <Grid item xs={6} className="full-height"  style={{background: '#EC4C8A'}}>
            <Item className="continent_inner__card"  style={{background: '#EC4C8A'}}>
             <h2>Visibility</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height"  style={{background: '#EC4C8A'}}>
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', background: '#EC4C8A'}}>
            <h2>{weather[0][1].visibility}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Latitude</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][1].coord.lat}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  style={{background: '#EC4C8A'}}>
          <Grid item xs={6} className="full-height"  style={{background: '#EC4C8A'}}>
            <Item className="continent_inner__card"  style={{background: '#EC4C8A'}}>
             <h2>Longitude</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height"  style={{background: '#EC4C8A'}}>
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', background: '#EC4C8A'}}>
            <h2>{weather[0][1].coord.lon}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Max Temp</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][1].main.temp_max}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{background: '#EC4C8A'}}>
          <Grid item xs={6} className="full-height" style={{background: '#EC4C8A'}}>
            <Item className="continent_inner__card" style={{background: '#EC4C8A'}}>
             <h2>Min Temp</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', background: '#EC4C8A'}}>
            <h2>{weather[0][1].main.temp_min}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="full-height">
            <Item className="continent_inner__card">
             <h2>Humidity</h2>
            </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height" style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <h2>{weather[0][1].main.humidity}</h2>
            <ArrowForwardIcon style={{color: 'white'}}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default Nairobi;