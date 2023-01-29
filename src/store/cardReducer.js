const CARD_ACTION = {
    ADD_CARD:'ADD_CARD',
    DELETE_CARD: 'DELETE_CARD',
    CHANGE_CARD: 'CHANGE_CARD',
    ADD_COUNT: 'ADD_COUNT',
    MINUS_COUNT: 'MINUS_COUNT'
}


const defaultState = {
    cards: [
        {
          id: '12312412',
          photo: 'https://tsiran.am/images/products/007422/798db4b3e83ff47b5238ac7231f52a12/764x600.jpg',
          title: 'BALKITA',
          date_from: '2023-02',
          date_to: '2023-04',
          count: '123',
        },
        {
          id: '123112412',
          photo: 'https://tsiran.am/images/products/007422/798db4b3e83ff47b5238ac7231f52a12/764x600.jpg',
          title: 'BoDka',
          date_from: '2023-06',
          date_to: '2023-10',
          count: '4',
        },
        {
          id: '2123112412',
          photo: 'https://tsiran.am/images/products/007422/798db4b3e83ff47b5238ac7231f52a12/764x600.jpg',
          title: 'PIVO',
          date_from: '2023-01',
          date_to: '2023-08',
          count: '1',
        }
    ]
  }
  
  const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
      case CARD_ACTION.ADD_CARD: //передаем CARD в payload
        return {...state, cards: [...state.cards, action.payload]}
      case CARD_ACTION.DELETE_CARD: //передаем ID в payload
        return {...state, cards: [...state.cards.filter(item => item.id !== action.payload)]}
      case CARD_ACTION.CHANGE_CARD: //передаем CARD в payload
        const currentIndex = state.cards.findIndex(item => item.id === action.payload.id);
        const copyCards = JSON.parse(JSON.stringify(state.cards));
        copyCards[currentIndex] = action.payload
        return {...state, cards: [...copyCards]}
      case CARD_ACTION.ADD_COUNT: //передаем ID в payload
        const plusIndex = state.cards.findIndex(item => item.id === action.payload);
        const plusCardsForChange = state.cards.filter(item => item.id === action.payload);
        let plusNum = Number.parseInt(plusCardsForChange[0].count, 10) + 1;
        plusNum = String(plusNum);
        const plusCards = JSON.parse(JSON.stringify(state.cards));
        plusCards[plusIndex].count = plusNum
        return {...state, cards: [...plusCards]}
      case CARD_ACTION.MINUS_COUNT: //передаем ID в payload
        const minusIndex = state.cards.findIndex(item => item.id === action.payload);
        const minusCardsForChange = state.cards.filter(item => item.id === action.payload);
        let minusNum = Number.parseInt(minusCardsForChange[0].count, 10) - 1;
        minusNum = String(minusNum);
        const minusCards = JSON.parse(JSON.stringify(state.cards));
        minusCards[minusIndex].count = minusNum
        return {...state, cards: [...minusCards]}
      default:
        return state
    }
  }

  export const addCardAction = (payload) => ({type: CARD_ACTION.ADD_CARD, payload})
  export const deleteCardAction = (payload) => ({type: CARD_ACTION.DELETE_CARD, payload})
  export const changeCardAction = (payload) => ({type: CARD_ACTION.CHANGE_CARD, payload})
  export const addCountAction = (payload) => ({type: CARD_ACTION.ADD_COUNT, payload})
  export const minusCountAction = (payload) => ({type: CARD_ACTION.MINUS_COUNT, payload})

export default cardReducer;
