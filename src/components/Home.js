import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import africaMap from '../assets/africa.png';
import europeMap from '../assets/europe.png';
import asiaMap from '../assets/asia.png';
import australiaMap from '../assets/australia.png';
import americaMap from '../assets/united-states-of-america.png';
import Navbar from './Navbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EF70A0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 0,
}));

export default function RowAndColumnSpacing() {
  const { weather } = useSelector((state) => state.weather);
  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%' }} className="global-container">
        <hr style={{ background: 'white' }} />
        {weather.map((city) => (
          <div key={Math.random() * 10}>
            <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6} className="full-height">
                <Item className="continent_inner__card" style={{ paddingRight: '20px' }}>
                  <NavLink to="/sanfrancisco/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={americaMap} alt="america map" />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[0].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[0].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[0].weather[0].description}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6} className="full-height" style={{ background: '#EC4C8A', padding: 0, marginTop: '20px' }}>
                <Item className="full-height" style={{ background: '#EC4C8A', paddingRight: '20px' }}>
                  <NavLink to="/nairobi/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white', marginTop: '-35px',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={africaMap} alt="africa map" style={{ paddingTop: '50px' }} />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[1].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[1].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[1].weather[0].description}
                  </p>
                </Item>
              </Grid>
            </Grid>
            <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6} className="full-height">
                <Item className="continent_inner__card" style={{ background: '#EC4C8A' }}>
                  <NavLink to="/mitte/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={europeMap} alt="africa map" />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[2].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[2].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[2].weather[0].description}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6} className="full-height border" style={{ paddingRight: 0 }}>
                <Item className="full-height">
                  <NavLink to="/sydney/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={australiaMap} alt="australia map" />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[3].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[3].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[3].weather[0].description}
                  </p>
                </Item>
              </Grid>
            </Grid>
            <Grid className="continent__card" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ background: '#EF70A0' }}>
              <Grid item xs={6} className="full-height" style={{ padding: 0, marginTop: '2px', background: '#EF70A0' }}>
                <Item className="continent_inner__card" style={{ background: '#EF70A0' }}>
                  <NavLink to="/shanghai/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={asiaMap} alt="asia map" />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[4].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[4].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[4].weather[0].description}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6} className="full-height">
                <Item className="continent_inner__card" style={{ background: '#EC4C8A' }}>
                  <NavLink to="/longisland/">
                    <ArrowForwardIcon
                      className="hover-effect"
                      style={{
                        fontSize: 30, display: 'flex', marginLeft: 'auto', color: 'white',
                      }}
                    />
                  </NavLink>
                  <img className="full-width" src={americaMap} alt="america map" />
                  <h6 style={{ fontSize: 30, textAlign: 'right' }}>{city[5].name}</h6>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Country:
                    {city[5].sys.country}
                  </p>
                  <p style={{ fontSize: 14, textAlign: 'right', color: 'black' }}>
                    Forecast:
                    {city[5].weather[0].description}
                  </p>
                </Item>
              </Grid>
            </Grid>
          </div>
        ))}
      </Box>
    </>
  );
}
