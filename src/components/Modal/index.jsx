import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, TextField, ButtonGroup, Button } from "@material-ui/core";

import { popupToggleAction } from "../../store/popupReducer";
import cardService from "../../services/CardService";
import {
  urlAction,
  titleAction,
  clearAction,
  countAction,
} from "../../store/modalCardReducer";
import { addCardAction } from "../../store/cardReducer";
import { changeCard } from "../../store/asyncActions/cards";
import MultiPicker from "../MultiPicker";
import useStyles from "./style";

const MainModal = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const popup = useSelector((state) => state.popup.popup);
  const modalCard = useSelector((state) => state.modalCard);

  const handleClose = () => {
    dispatch(popupToggleAction());
    dispatch(clearAction());
  };

  const handelSave = async () => {
    if (modalCard.id) {
      try {
        dispatch(changeCard(modalCard));
      } catch (error) {
        console.log("ОШИБКА изменения товара");
      }
    } else {
      const card = {
        title: modalCard.title,
        dateFrom: modalCard.dateFrom,
        dateTo: modalCard.dateTo,
        count: modalCard.count,
        url: modalCard.url,
      };
      console.log(card);
      try {
        const newCard = await cardService.createCard(card);
        console.log(newCard);
        dispatch(addCardAction(newCard.data));
      } catch (e) {
        console.log("Ошибка добавления товара");
      }
    }

    dispatch(popupToggleAction());
    dispatch(clearAction());
  };

  return (
    <Modal
      open={popup}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Ссылка на картинку"
            value={modalCard.url}
            onChange={(e) => dispatch(urlAction(e.target.value))}
          />
          <TextField
            id="standard-basic"
            label="Название пива"
            value={modalCard.title}
            onChange={(e) => dispatch(titleAction(e.target.value))}
          />
          <MultiPicker modal={true} />
          <TextField
            id="standard-basic"
            label="Кол-во бутылок"
            value={modalCard.count}
            onChange={(e) => dispatch(countAction(e.target.value))}
          />
          <ButtonGroup
            variant="contained"
            color="primary"
            className={classes.ButtonGroup}
          >
            <Button onClick={() => handelSave()}>Сохранить</Button>
            <Button onClick={() => handleClose()}>Закрыть</Button>
          </ButtonGroup>
        </form>
      </div>
    </Modal>
  );
};

export default MainModal;
