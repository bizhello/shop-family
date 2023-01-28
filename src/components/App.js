import './App.css';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    marginRight: 30
  }
}))

function App() {
  const classes = UseStyles()
  return (
    <AppBar position='fixed'>
      <Container fixed>
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

export default App;
