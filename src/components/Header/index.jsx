import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import authService from "../../services/AuthService";

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

import { deleteUserInfoAction } from "../../store/userReducer";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handelLogout = async () => {
    try {
      await authService.logout();
      localStorage.clear('accessToken')
      localStorage.clear('userId')
      dispatch(deleteUserInfoAction());
    } catch (e) {
      console.log("Ошибка выхода", e);
    }
  };

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
                Sign in
              </Button>
            </NavLink>
          </Box>
          <NavLink to="/shop-family/sign-up" className={classes.href}>
            <Button color="inherit" variant="outlined">
              Sign up
            </Button>
          </NavLink>
          <Button
            className={classes.logoutButton}
            color="inherit"
            variant="outlined"
            onClick={() => handelLogout()}
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
