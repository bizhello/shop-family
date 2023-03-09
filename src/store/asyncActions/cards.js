import {
  addManyCardsAction,
  changeCardAction,
  addCountAction,
  minusCountAction,
  deleteCardAction,
  addCardAction,
} from "../cardReducer";
import cardService from "../../services/CardService";

export const fetchCards = () => {
  return (dispatch) => {
    cardService
      .getCards()
      .then((data) => dispatch(addManyCardsAction(data.data)));
  };
};

export const createCard = (card) => {
  return (dispatch) => {
    cardService
      .createCard(card)
      .then((data) => dispatch(addCardAction(data.data)));
  };
};

export const changeCard = (id, data) => {
  return (dispatch) => {
    cardService
      .changeCardById(id, data)
      .then((data) => dispatch(changeCardAction(data.data)));
  };
};

export const increment = (id) => {
  return (dispatch) => {
    cardService.increment(id).then(() => dispatch(addCountAction(id)));
  };
};

export const decrement = (id) => {
  return (dispatch) => {
    cardService.decrement(id).then(() => dispatch(minusCountAction(id)));
  };
};

export const deleteCard = (id) => {
  return (dispatch) => {
    cardService.deleteCardById(id).then(() => dispatch(deleteCardAction(id)));
  };
};
