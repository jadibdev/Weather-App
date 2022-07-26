import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../features/wheather/weatherSlice';
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import africaMap from '../assets/africa.png';
import europeMap from '../assets/europe.png';
import asiaMap from '../assets/asia.png';
import australiaMap from '../assets/australia.png'
import americaMap from '../assets/united-states-of-america.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './Navbar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EF70A0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 0,
}));


export default function RowAndColumnSpacing(props) {
  const { weather } = props
 
  return (
    <>
      <Navbar />
    <Box sx={{ width: '100%' }} className="global-container">
      {weather.map((city) => (
        <div key={Math.random() * 10}>
          <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className="full-height border">
          <Item className="continent_inner__card">
            <NavLink to="sanfrancisco"><ArrowForwardIcon id={0} style={{ fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white' }} /></NavLink>
            <img className="full-width" src={americaMap} alt="america map"/>
            <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[0].name}</h6>
            <p>{city[0].main.temp}</p>
          </Item>
        </Grid>
        <Grid item xs={6} className="full-height">
          <Item className="full-height">
            <ArrowForwardIcon style={{ fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white' }} />
            <img className="full-width" src={africaMap} alt="africa map"/>
            <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[1].name}</h6>
            <p>{city[1].main.temp}</p>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className="full-height border">
          <Item className="continent_inner__card">
            <ArrowForwardIcon style={{ fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white' }} />
            <img className="full-width" src={europeMap} alt="africa map"/>
            <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[2].name}</h6>
            <p>{city[2].main.temp}</p>
          </Item>
        </Grid>
        <Grid item xs={6} className="full-height border">
          <Item className="full-height">
            <ArrowForwardIcon style={{ fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white' }} />
            <img className="full-width" src={australiaMap} alt="africa map"/>
            <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[3].name}</h6>
            <p>{city[3].main.temp}</p>
          </Item>
        </Grid>
      </Grid>
      <hr />
      <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} className="full-height border">
          <Item className="continent_inner__card">
            <ArrowForwardIcon style={{ fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white' }} />
            <img className="full-width" src={asiaMap} alt="africa map"/>
            <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[4].name}</h6>
            <p>{city[4].main.temp}</p>
          </Item>
        </Grid>
        
      </Grid>

        </div>
      ))}
    </Box>
    </>
  );
}

      