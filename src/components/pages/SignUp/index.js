import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AuthService from "../../../services/AuthService";
import { getUserFullFilled } from "../../../store/auth/actions";

import useStyles from "./style";
import HeaderWithoutAuth from "../../Header/HeaderWithoutAuth/index";

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

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
      const { data } = await AuthService.register(formValue);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data.userId);
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  // error='true'
                  // helperText='Минимальная длина 2 символа, максимальная 30 '
                  autoFocus
                  value={formValue.firstName}
                  onChange={(e) =>
                    setFormValue({ ...formValue, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={formValue.lastName}
                  onChange={(e) =>
                    setFormValue({ ...formValue, lastName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formValue.password}
                  onChange={(e) =>
                    setFormValue({ ...formValue, password: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="click"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="space-between">
              {error.status && (
                <Grid item>
                  <Typography color="error"> {error.message}</Typography>
                </Grid>
              )}
              <Grid item>
                <NavLink to="/shop-family/sign-in" className={classes.href}>
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={5}>
        <Copyright />
      </Box> */}
      </Container>
    </>
  );
};

export default SignUp;
