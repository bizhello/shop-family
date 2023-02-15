import { combineReducers, createStore } from 'redux';
import popupReducer from './popupReducer';
import cardReducer from './cardReducer'
import modalCardReducer from './modalCardReducer';

const rootReducer = combineReducers({
    popup: popupReducer,
    card: cardReducer,
    modalCard: modalCardReducer,
})

const store = createStore(rootReducer)

export default store;
