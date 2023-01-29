import { combineReducers, createStore } from 'redux';
import popupReducer from './popupReducer';
import cardReducer from './cardReducer'

const rootReducer = combineReducers({
    popup: popupReducer,
    card: cardReducer,
})

const store = createStore(rootReducer)

export default store;
