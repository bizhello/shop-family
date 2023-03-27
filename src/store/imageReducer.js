const IMAGE_ACTION = {
  CREATE: "CREATE_IMAGE",
  DELETE: "DELETE_IMAGE",
};
const defaultState = {
  images: [],
};

const imageReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case IMAGE_ACTION.CREATE:
      return { ...state, images: [...payload] };
    case IMAGE_ACTION.DELETE:
      return {
        ...state,
        images: [...state.images.filter((item) => item.cardId !== payload)],
      };
    default:
      return state;
  }
};

export const createAction = (payload) => ({
  type: IMAGE_ACTION.CREATE,
  payload,
});
export const deleteAction = (payload) => ({
  type: IMAGE_ACTION.DELETE,
  payload: payload.cardId,
});

export default imageReducer;
