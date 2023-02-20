import { combineReducers, createStore } from 'redux';
import popupReducer from './popupReducer';
import cardReducer from './cardReducer'
import modalCardReducer from './modalCardReducer';
import userReducer from './userReducer'
import authReducer from './auth';

const rootReducer = combineReducers({
    popup: popupReducer,
    card: cardReducer,
    modalCard: modalCardReducer,
    user: userReducer,
    auth: authReducer
})

const store = createStore(rootReducer)

export default store;
