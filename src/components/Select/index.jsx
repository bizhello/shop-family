import React from 'react';

import {FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './style';

const MainSelect = () => {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
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
                <MenuItem value="">
                    <em>Отменить</em>
                </MenuItem>
                <MenuItem value={10}>Дате добавления</MenuItem>
                <MenuItem value={20}>Дате изготовления</MenuItem>
                <MenuItem value={30}>Дате истечения срока годности</MenuItem>
            </Select>
        </FormControl>
     );
}
 
export default MainSelect;
