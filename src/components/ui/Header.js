import React from 'react';
import logo from '../../img/android-chrome-512x512.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div>
      <AppBar position='static' color='success'>
        <Container>
          <Toolbar>
            <img src={logo} alt='' style={{ height: 40, margin: 15 }} />
            <Typography variant='h4'>The Bear Garden</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
