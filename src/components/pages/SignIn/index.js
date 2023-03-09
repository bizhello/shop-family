import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AuthService from "../../../services/AuthService";
import HeaderWithoutAuth from "../../Header/HeaderWithoutAuth";
import { getUserFullFilled } from "../../../store/auth/actions";

import useStyles from "./style";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = React.useState({
    status: null,
    message: "",
  });

  React.useEffect(() => {
    setError({ status: null, message: "" });
  }, [formValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await AuthService.login(formValue);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data.id);
      dispatch(getUserFullFilled(data));
      navigate("../shop-family");
    } catch (e) {
      setError({
        status: e.response.status,
        message: e.response.statusText,
      });
    }
  };

  return (
    <>
      <HeaderWithoutAuth />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
            />

            {error.status && (
              <Grid item>
                <Typography color="error"> {error.message}</Typography>
              </Grid>
            )}
            <FormControlLabel
              control={<Checkbox value="true" color="primary" />}
              label="Remember me"
              onChange={(e) =>
                setFormValue({ ...formValue, remember: e.target.checked })
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink href="#" className={classes.href}>
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/shop-family/sign-up" className={classes.href}>
                  Don't have an account? Sign Up
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
        <Copyright />
      </Box> */}
      </Container>
    </>
  );
};

export default SignIn;
