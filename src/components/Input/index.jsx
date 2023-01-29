import React from 'react';

import { TextField } from '@material-ui/core';

import useStyles from './style'

const MainInput = () => {
    const classes = useStyles()
  
    return ( 
        <TextField
            id="main_input"
            label="Название пива"
            className={classes.mainInput}
            placeholder="Введите название пива для поиска ..."
            // helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
        />
    );
}
 
export default MainInput;
