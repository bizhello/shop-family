import { AUTH_GET_USER_PENDING, AUTH_GET_USER_FULL_FILLED, AUTH_GET_USER_REJECTED } from "./action_types";

export const getUserPending = () => ({
    type: AUTH_GET_USER_PENDING,
  });
  export const getUserFullFilled = (user) => ({
    type: AUTH_GET_USER_FULL_FILLED,
    payload: user,
  });
  export const getUserRejected = () => ({
    type: AUTH_GET_USER_REJECTED,
  });