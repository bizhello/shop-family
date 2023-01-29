import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 80
    },
    info: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },
    media: {
      width: 100,
      height: 140,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    count: {
      textAlign: 'center',
      margin: 0,
      // marginRight: 70,
    },
    ButtonGroup: {
      // marginRight: 20,
    }
  });

  export default useStyles;
  