const POPUP_TOGGLE = 'POPUP_TOGGLE';

const defaultState = {
    popup: false
  }
  
  const popupReducer = (state = defaultState, action) => {
    switch (action.type) {
      case POPUP_TOGGLE:
        return {...state, popup: !state.popup}
      default:
        return state
    }
  }

export const popupToggleAction = () => ({type: POPUP_TOGGLE, payload: null});

export default popupReducer;
