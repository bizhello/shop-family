import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

const store = createStore(rootReducer ,applyMiddleware(thunk))

export default store;
