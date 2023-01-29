import React from 'react';

import {AppBar, Box, Container, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './style'

const Header = () => {
    const classes = useStyles()
    return ( 
        <AppBar position='static'>
        <Container>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h4' className={classes.title}>SHOP FAMILY</Typography>
            <Box className={classes.loginButton}>
              <Button color='inherit' variant='outlined'>Log In</Button>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
     );
}
 
export default Header;
