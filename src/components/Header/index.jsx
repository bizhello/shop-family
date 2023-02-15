import React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            SHOP FAMILY
          </Typography>
          <NavLink to="/shop-family" className={classes.href}>
            <Button color="secondary" variant="contained">
              Main
            </Button>
          </NavLink>
          <Box className={classes.loginButton}>
            <NavLink to="/shop-family/sign-in" className={classes.href}>
              <Button color="inherit" variant="outlined">
                Log In
              </Button>
            </NavLink>
          </Box>
          <NavLink to="/shop-family/sign-up" className={classes.href}>
            <Button color="inherit" variant="outlined">
              Log Up
            </Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
