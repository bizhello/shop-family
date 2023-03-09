import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginRight: theme.spacing(2),
      width: 150,
    },
}));

export default useStyles;
