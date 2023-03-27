import React from 'react';

import {FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { filterCreatedAction, filterEndAction } from '../../store/cardReducer';

const MainSelect = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        if(event.target.value === 20) {
            dispatch(filterCreatedAction());
        }
        if(event.target.value === 30) {
            dispatch(filterEndAction());
        }
        setAge(event.target.value)
    }

    return ( 
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Сортировать по</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="main_select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={20}>Дате изготовления</MenuItem>
                <MenuItem value={30}>Дате истечения срока годности</MenuItem>
            </Select>
        </FormControl>
     );
}
 
export default MainSelect;
