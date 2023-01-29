import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField } from '@material-ui/core';
import { changeCardAction } from '../../store/cardReducer'
import useStyles from './style.js'

const DatePickers = ({label , data}) =>  {
  const [dataValue, setDataValue] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();

  const changeDate = (e) => {
    if(label === 'FROM') {
      data.date_from = e.target.value;
      dispatch(changeCardAction(data))
    } if(label === 'TO') {
      data.date_to = e.target.value;
      dispatch(changeCardAction(data))
    } else {
      setDataValue(e.target.value)
    } 
  }

  const getValue = () => {
    switch(label) {
      case 'FROM':
        return data.date_from
      case 'TO':
        return data.date_to  
      default:
        return dataValue
    }
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="month"
        value={getValue()}
        onChange={(e => changeDate(e))}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DatePickers;