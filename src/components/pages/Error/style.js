import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    error: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vw',
        background: '#202020',
    },
    title: {
        margin: 0,
        padding: 0,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '140px',
        lineHeight: '169px',
        color: '#FFFFFF',
    },
    text: {
        margin: '5px 0 0',
        padding: 0,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
    },
    back: {
        marginTop: '20%',
        padding: 0,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        textDecoration: 'none',
        color: '#4285F4',
    },
  });

  export default useStyles;
  