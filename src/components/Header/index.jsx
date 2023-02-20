import React from "react";

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./style";

const Header = ({ children }) => {
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
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
