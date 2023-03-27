const CARD_ACTION = {
  ADD_CARD: "ADD_CARD",
  ADD_MANY_CARDS: "ADD_MANY_CARDS",
  DELETE_CARD: "DELETE_CARD",
  CHANGE_CARD: "CHANGE_CARD",
  ADD_COUNT: "ADD_COUNT",
  MINUS_COUNT: "MINUS_COUNT",
  FILTER_CREATED: "FILTER_CREATED",
  FILTER_END: "FILTER_END",
};

const defaultState = {
  cards: [],
};

const cardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CARD_ACTION.ADD_MANY_CARDS:
      return {
        ...state,
        cards: payload.map((item) => ({
          // url: `${process.env.REACT_APP_API_URL}/static/images/${item.id}/image.webp`,
          // url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
          ...item,
        })),
      };
    case CARD_ACTION.ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            url: `${process.env.REACT_APP_API_URL}/static/images/${payload.id}/image.webp`,
            ...payload,
          },
        ],
      };
    case CARD_ACTION.DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((item) => item.id !== payload)],
      };
    case CARD_ACTION.CHANGE_CARD:
      const currentIndex = state.cards.findIndex(
        (item) => item.id === payload.id
      );
      const copyCards = state.cards.slice(0);
      copyCards[currentIndex] = payload;

      return { ...state, cards: [...copyCards] };
    case CARD_ACTION.ADD_COUNT:
      const plusIndex = state.cards.findIndex((item) => item.id === payload);
      const plusCardsForChange = state.cards.filter(
        (item) => item.id === payload
      );
      let plusNum = plusCardsForChange[0].count + 1;
      const plusCards = JSON.parse(JSON.stringify(state.cards));
      plusCards[plusIndex].count = plusNum;

      return { ...state, cards: [...plusCards] };
    case CARD_ACTION.MINUS_COUNT:
      const minusIndex = state.cards.findIndex((item) => item.id === payload);
      const minusCardsForChange = state.cards.filter(
        (item) => item.id === payload
      );
      let minusNum = minusCardsForChange[0].count - 1;
      const minusCards = JSON.parse(JSON.stringify(state.cards));
      minusCards[minusIndex].count = minusNum;

      return { ...state, cards: [...minusCards] };
    case CARD_ACTION.FILTER_CREATED:
      const sortedCreated = state.cards.sort(
        (a, b) =>
          new Date(...a.dateFrom.split("/").reverse()) -
          new Date(...b.dateFrom.split("/").reverse())
      );

      return { ...state, cards: [...sortedCreated] };
    case CARD_ACTION.FILTER_END:
      const sortedEnd = state.cards.sort(
        (a, b) =>
          new Date(...a.dateTo.split("/").reverse()) -
          new Date(...b.dateTo.split("/").reverse())
      );

      return { ...state, cards: [...sortedEnd] };
    default:
      return state;
  }
};

export const addCardAction = (payload) => ({
  type: CARD_ACTION.ADD_CARD,
  payload,
});
export const addManyCardsAction = (payload) => ({
  type: CARD_ACTION.ADD_MANY_CARDS,
  payload,
});
export const deleteCardAction = (payload) => ({
  type: CARD_ACTION.DELETE_CARD,
  payload,
});
export const changeCardAction = (payload) => ({
  type: CARD_ACTION.CHANGE_CARD,
  payload,
});
export const addCountAction = (payload) => ({
  type: CARD_ACTION.ADD_COUNT,
  payload,
});
export const minusCountAction = (payload) => ({
  type: CARD_ACTION.MINUS_COUNT,
  payload,
});
export const filterCreatedAction = () => ({
  type: CARD_ACTION.FILTER_CREATED,
  payload: null,
});
export const filterEndAction = () => ({
  type: CARD_ACTION.FILTER_END,
  payload: null,
});

export default cardReducer;
