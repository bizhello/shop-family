import { NavLink } from "react-router-dom";

import { Button, Box } from "@material-ui/core";

import useStyles from "../style";
import Header from "../index";
import { HEADER_SIGN_IN, HEADER_SIGN_UP } from "../../../common/constants";

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
            {HEADER_SIGN_IN}
          </Button>
        </NavLink>
      </Box>
      <NavLink to="/shop-family/sign-up" className={classes.href}>
        <Button color="inherit" variant="outlined">
          {HEADER_SIGN_UP}
        </Button>
      </NavLink>
    </Header>
  );
};

export default HeaderWithoutAuth;
