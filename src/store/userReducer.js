const ADD_USER_ID = "ADD_USER_ID";
const ADD_USER_INFO = "ADD_USER_INFO";
const DELETE_USER_INFO = "DELETE_USER_INFO";
const LOGGED_IN = 'LOGGED_IN';

const defaultState = {
  userId: null,
  email: "",
  firstName: "",
  lastName: "",
  loggedIn: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, loggedIn: true };
    case ADD_USER_INFO: // передаем всю инфу кроме ID
      return {
        ...state,
        userId: action.payload.userId,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        loggedIn: action.payload.loggedIn,
      };
    
    case DELETE_USER_INFO:
      return {
        ...state,
        userId: null,
        email: "",
        firstName: "",
        lastName: "",
        loggedIn: false,
      };
    default:
      return state;
  }
};

export const addUserIdAction = (payload) => ({
  type: ADD_USER_ID,
  payload: payload,
});
export const addUserInfoAction = (payload) => ({
  type: ADD_USER_INFO,
  payload: payload,
});
export const deleteUserInfoAction = () => ({
  type: DELETE_USER_INFO,
  payload: null,
});
export const loggedInAction = ()=> ({
  type: LOGGED_IN,
  payload: null,
})

export default userReducer;
