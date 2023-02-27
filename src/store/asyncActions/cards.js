import {
  addManyCardsAction,
  changeCardAction,
  addCountAction,
  minusCountAction,
  deleteCardAction,
} from "../cardReducer";
import cardService from "../../services/CardService";

export const fetchCards = () => {
  return (dispatch) => {
    cardService.getCards().then((data) => dispatch(addManyCardsAction(data.data)));
  };
};

export const changeCard = (card) => {
  return (dispatch) => {
    cardService
      .changeCardById(card)
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
