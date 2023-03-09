import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: `25%`,
        left: `41%`,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    ButtonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(6),
    }
}));

export default useStyles;