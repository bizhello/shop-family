const enums = {
  CHANGE_MODAL: "CHANGE_MODAL",
  CHANGE_URL: "CHANGE_URL",
  CHANGE_TITLE: "CHANGE_TITLE",
  CHANGE_DATE_FROM: "CHANGE_DATE_FROM",
  CHANGE_DATE_TO: "CHANGE_DATE_TO",
  CHANGE_COUNT: "CHANGE_COUNT",
  CLEAR: "CLEAR",
};
const defaultState = {
  id: null,
  url: "",
  title: "",
  dateFrom: null,
  dateTo: null,
  count: null,
};

const modalCardReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case enums.CHANGE_URL:
      return { ...state, url: payload };
    case enums.CHANGE_TITLE:
      return { ...state, title: payload };
    case enums.CHANGE_DATE_FROM:
      return { ...state, dateFrom: payload };
    case enums.CHANGE_DATE_TO:
      return { ...state, dateTo: payload };
    case enums.CHANGE_COUNT:
      return { ...state, count: payload };
    case enums.CHANGE_MODAL:
      return {
        ...state,
        id: payload.id,
        url: payload.url,
        title: payload.title,
        dateFrom: payload.dateFrom,
        dateTo: payload.dateTo,
        count: payload.count,
      };
    case enums.CLEAR:
      return {
        ...state,
        id: null,
        url: "",
        title: "",
        dateFrom: null,
        dateTo: null,
        count: null,
      };
    default:
      return state;
  }
};

export const urlAction = (payload) => ({ type: enums.CHANGE_URL, payload });
export const titleAction = (payload) => ({ type: enums.CHANGE_TITLE, payload });
export const dateFromAction = (payload) => ({
  type: enums.CHANGE_DATE_FROM,
  payload,
});
export const dateToAction = (payload) => ({
  type: enums.CHANGE_DATE_TO,
  payload,
});
export const countAction = (payload) => ({ type: enums.CHANGE_COUNT, payload });
export const clearAction = (payload) => ({ type: enums.CLEAR, payload });
export const changeAction = (payload) => ({
  type: enums.CHANGE_MODAL,
  payload,
});

export default modalCardReducer;
