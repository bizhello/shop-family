import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

import Header from "../index";
import useStyles from "../style";
import authService from "../../../services/AuthService";

const HeaderIsAuth = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handelLogout = async () => {
    try {
      await authService.logout();
      navigate("../shop-family/sign-in");
      localStorage.clear("accessToken");
      localStorage.clear("userId");
    } catch (e) {
      console.log("Ошибка выхода", e);
    }
  };

  return (
    <Header>
      <Button
        className={classes.logoutButton}
        color="secondary"
        variant="contained"
        onClick={() => handelLogout()}
      >
        Logout
      </Button>
    </Header>
  );
};

export default HeaderIsAuth;
