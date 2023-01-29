import React from 'react';
import { useDispatch } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import { Fab, Typography, Tooltip } from '@material-ui/core';

import MainSelect from '../Select'
import { popupToggleAction } from '../../store/popupReducer'

import useStyles from './style'


const InputWithButton = () => {

    const dispatch = useDispatch();

    const handelClick = () => { 
        dispatch(popupToggleAction())
    }

    const classes = useStyles();
    return ( 
        <div className={classes.block}>
            <MainSelect />
            <div className={classes.block}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                    Добавить товар
                </Typography>
                <Tooltip title="Add" aria-label="add">
                    <Fab color="secondary" className={classes.absolute} onClick={()=> handelClick()}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    )
}
 
export default InputWithButton;