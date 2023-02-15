import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '@material-ui/core';

import { parseDateInText, parseDateInNumber } from '../utils/parseDate';
import { dateFromAction , dateToAction } from '../../store/modalCardReducer'
import { changeCardAction } from '../../store/cardReducer'
import useStyles from './style.js'

const DatePickers = ({ label , data }) =>  {

  const classes = useStyles();
  const dispatch = useDispatch();

  const dataModal = useSelector(state=> state.modalCard)

  const changeDate = (e) => {
    if(label === 'FROM') {
      const newDataFrom = data;
      newDataFrom.dateFrom = parseDateInNumber(e);
      dispatch(changeCardAction(newDataFrom))
    } if(label === 'TO') {
      const newDateTo = data;
      newDateTo.dateTo = parseDateInNumber(e)
      dispatch(changeCardAction(newDateTo))
    } if(label === 'NEW_FROM') {
      const dateNewFrom = parseDateInNumber(e);
      dispatch(dateFromAction(dateNewFrom))
    } if(label === 'NEW_TO') {
      const dateNewTo = parseDateInNumber(e);
      dispatch(dateToAction(dateNewTo))
    } 
  }

  const getValue = () => {
    switch(label) {
      case 'FROM':
        return parseDateInText(data.dateFrom)
      case 'TO':
        return parseDateInText(data.dateTo)
      case 'NEW_FROM':
        return dataModal.dateFrom ? parseDateInText(dataModal.dateFrom): '';
      case 'NEW_TO':
        return dataModal.dateTo ? parseDateInText(dataModal.dateTo): '';
      default:
        return 0
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
