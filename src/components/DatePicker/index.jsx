import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@material-ui/core";

import { parseDateInText, parseDateInNumber } from "../../utils/parseDate";
import { dateFromAction, dateToAction } from "../../store/modalCardReducer";

import { changeCard } from "../../store/asyncActions/cards";
import { DATE_PICKER_LABEL } from "../../common/constants";
import useStyles from "./style.js";

const DatePickers = ({ label, data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dataModal = useSelector((state) => state.modalCard);

  const changeDate = (e) => {
    switch (label) {
      case DATE_PICKER_LABEL.from:
        dispatch(changeCard(data.id, { dateFrom: new Date(e.target.value) }));
        break;
      case DATE_PICKER_LABEL.to:
        dispatch(changeCard(data.id, { dateTo: new Date(e.target.value) }));
        break;
      case DATE_PICKER_LABEL.newFrom:
        dispatch(dateFromAction(new Date(e.target.value)));
        break;
      case DATE_PICKER_LABEL.newTo:
        dispatch(dateToAction(new Date(e.target.value)));
        break;
      default:
        return 0;
    }
  };

  const getValue = () => {
    switch (label) {
      case DATE_PICKER_LABEL.from:
        return parseDateInText(new Date(data.dateFrom));
      case DATE_PICKER_LABEL.to:
        return parseDateInText(new Date(data.dateTo));
      case DATE_PICKER_LABEL.newFrom:
        return dataModal.dateFrom ? parseDateInText(new Date(dataModal.dateFrom)) : "";
      case DATE_PICKER_LABEL.newTo:
        return dataModal.dateTo ? parseDateInText(new Date(dataModal.dateTo)) : "";
      default:
        return 0;
    }
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="month"
        value={getValue()}
        onChange={(e) => changeDate(e)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default DatePickers;
