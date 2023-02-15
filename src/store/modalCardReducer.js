const enums = {
    CHANGE_MODAL: 'CHANGE_MODAL',
    CHANGE_URL: 'CHANGE_URL',
    CHANGE_TITLE: 'CHANGE_TITLE',
    CHANGE_DATE_FROM: 'CHANGE_DATE_FROM',
    CHANGE_DATE_TO: 'CHANGE_DATE_TO',
    CHANGE_COUNT: 'CHANGE_COUNT',
    CLEAR: 'CLEAR'
}
const defaultState = {
    id: null,
    url: '',
    title: '',
    dateFrom: null,
    dateTo: null,
    count: null
}

const modalCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case enums.CHANGE_URL: 
            return {...state, url:action.payload }
        case enums.CHANGE_TITLE: 
            return {...state, title: action.payload }
        case enums.CHANGE_DATE_FROM:
            return {...state, dateFrom: action.payload }
        case enums.CHANGE_DATE_TO:
            return {...state, dateTo: action.payload }  
        case enums.CHANGE_COUNT: 
            return {...state, count: action.payload }
        case enums.CHANGE_MODAL:
            return {
                ...state,
                id: action.payload.id,
                url: action.payload.url,
                title: action.payload.title,
                dateFrom: action.payload.dateFrom,
                dateTo: action.payload.dateTo,
                count: action.payload.count
            }
        case enums.CLEAR:
            return {...state,id: null,  url: '', title: '', dateFrom: null, dateTo: null, count: null}
        default: 
            return state
    }
}

export const urlAction = (payload) => ({type: enums.CHANGE_URL, payload});
export const titleAction = (payload) => ({type: enums.CHANGE_TITLE, payload});
export const dateFromAction = (payload) => ({type: enums.CHANGE_DATE_FROM, payload});
export const dateToAction = (payload) => ({type: enums.CHANGE_DATE_TO, payload});
export const countAction = (payload) => ({type: enums.CHANGE_COUNT, payload})
export const clearAction = (payload) => ({type: enums.CLEAR, payload});
export const changeAction = (payload) => ({type: enums.CHANGE_MODAL, payload});

export default modalCardReducer;
