import imageService from "../../services/imageService";
import {createAction, deleteAction} from '../imageReducer'

export const createImage = (cardId, image) => {
  return (dispatch) => {
    imageService
      .createImageById(cardId, image)
      .then((data) => dispatch(createAction(data.data)));
  };
};

export const deleteImage = (cardId) => {
  return (dispatch) => {
    imageService
      .deleteImageById(cardId)
      .then((data) => dispatch(deleteAction(data.data)));
  };
};
