import { NavLink } from "react-router-dom";

import { Button, Box } from "@material-ui/core";

import useStyles from "../style";
import Header from "../index";

const HeaderWithoutAuth = () => {
  const classes = useStyles();
  return (
    <Header>
      {/* <NavLink to="/shop-family" className={classes.href}>
        <Button color="secondary" variant="contained">
          Main
        </Button>
      </NavLink> */}
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
    </Header>
  );
};

export default HeaderWithoutAuth;
