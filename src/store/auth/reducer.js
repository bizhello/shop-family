import { AUTH_SET_LOGGED_IN, AUTH_SET_USER, AUTH_GET_USER_PENDING, AUTH_GET_USER_FULL_FILLED, AUTH_GET_USER_REJECTED } from "./action_types";

const defaultState = {
  loading: true,
  loggedIn: false,
  user: null,
};

const authReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case AUTH_SET_LOGGED_IN:
      return { ...state, loggedIn: payload };
    case AUTH_SET_USER:
      return {
        ...state,
        user: payload,
      };

      case AUTH_GET_USER_PENDING: 
      return {
        ...state,
        loading: true,
      };
      case AUTH_GET_USER_FULL_FILLED: 
      return {
        ...state,
        user: payload,
        loggedIn: true,
        loading: false,
      };
      case AUTH_GET_USER_REJECTED: 
      return {
        ...state,
        loading: false,
      };


    default:
      return state;
  }
};



export default authReducer;
