import React from 'react';
import { AppBar, Button, Toolbar, Typography, ThemeProvider, Avatar} from '@mui/material';
import appTheme from '../themeConfig'
import dpLogo from '../Assets/deadpool_logo.png'
import '../CSS/Navbar.css'


const Navbar = () => {
  return (
      <ThemeProvider theme={appTheme}>
        <AppBar position="absolute" style={{padding: 3}}>
          <Toolbar>
              <Avatar className='dpLogo' alt="React Logo" src={dpLogo} />
            <Typography variant="h5" color="inherit"  sx={{ flexGrow: 1, padding: 2}}>
              DeadPool Page
            </Typography>
            <Button href="#" sx={{mx: 2}} variant='contained' color='secondary'>Inicio</Button>
            <Button href="#" sx={{mx: 2}} variant='contained' color='secondary'>Footer</Button>
          </Toolbar>
        </AppBar>     
      </ThemeProvider>
  )
}

export default Navbar;