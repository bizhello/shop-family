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

const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CARD_ACTION.ADD_MANY_CARDS:
      const newCards = action.payload.map((item) => {
        const newItem = {
          id: item._id,
          url: item.url,
          title: item.title,
          dateFrom: item.dateFrom,
          dateTo: item.dateTo,
          count: item.count,
        };
        return newItem;
      });

      return { ...state, cards: [...newCards] };
    case CARD_ACTION.ADD_CARD:
      const card = {
        id: action.payload._id,
        url: action.payload.url,
        title: action.payload.title,
        dateFrom: action.payload.dateFrom,
        dateTo: action.payload.dateTo,
        count: action.payload.count,
      };

      return { ...state, cards: [...state.cards, card] };
    case CARD_ACTION.DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((item) => item.id !== action.payload)],
      };
    case CARD_ACTION.CHANGE_CARD:
      const currentIndex = state.cards.findIndex(
        (item) => item.id === action.payload._id
      );
      const copyCards = JSON.parse(JSON.stringify(state.cards));
      copyCards[currentIndex] = {
        id: action.payload._id,
        url: action.payload.url,
        title: action.payload.title,
        dateFrom: action.payload.dateFrom,
        dateTo: action.payload.dateTo,
        count: action.payload.count,
      };

      return { ...state, cards: [...copyCards] };
    case CARD_ACTION.ADD_COUNT:
      const plusIndex = state.cards.findIndex(
        (item) => item.id === action.payload
      );
      const plusCardsForChange = state.cards.filter(
        (item) => item.id === action.payload
      );
      let plusNum = plusCardsForChange[0].count + 1;
      const plusCards = JSON.parse(JSON.stringify(state.cards));
      plusCards[plusIndex].count = plusNum;

      return { ...state, cards: [...plusCards] };
    case CARD_ACTION.MINUS_COUNT:
      const minusIndex = state.cards.findIndex(
        (item) => item.id === action.payload
      );
      const minusCardsForChange = state.cards.filter(
        (item) => item.id === action.payload
      );
      let minusNum = minusCardsForChange[0].count - 1;
      const minusCards = JSON.parse(JSON.stringify(state.cards));
      minusCards[minusIndex].count = minusNum;

      return { ...state, cards: [...minusCards] };
    case CARD_ACTION.FILTER_CREATED:
      const sortedCreated = state.cards.sort((a, b) => a.dateFrom - b.dateFrom);

      return { ...state, cards: [...sortedCreated] };
    case CARD_ACTION.FILTER_END:
      const sortedEnd = state.cards.sort((a, b) => a.dateTo - b.dateTo);

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
