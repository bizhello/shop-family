const CARD_ACTION = {
    ADD_CARD:'ADD_CARD',
    DELETE_CARD: 'DELETE_CARD',
    CHANGE_CARD: 'CHANGE_CARD',
    ADD_COUNT: 'ADD_COUNT',
    MINUS_COUNT: 'MINUS_COUNT',
    FILTER_CREATED: 'FILTER_CREATED',
    FILTER_END: 'FILTER_END',
}

const defaultState = {
    cards: [
        {
          id: 1,
          url: 'https://s0.rbk.ru/v6_top_pics/media/img/9/16/756619467602169.jpg',
          title: 'Чтото-там',
          dateFrom: 1675209600000,
          dateTo: 1685577600000,
          count: 12,
        },
        {
          id: 2,
          url: 'https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480',
          title: 'Чтото-там еще',
          dateFrom: 1696118400000,
          dateTo: 1675209600000,
          count: 1,
        },
        {
          id: 3,
          url: "https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg",
          title: 'один два',
          dateFrom: 1685577600000,
          dateTo: 1696118400000,
          count: 0,
        }
    ]
  }
  
  
  const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
      case CARD_ACTION.ADD_CARD: //передаем CARD в payload
        const id = Date.now();
        const card = {id, ...action.payload}
        return {...state, cards: [...state.cards, card]}
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
        let plusNum = plusCardsForChange[0].count + 1;
        const plusCards = JSON.parse(JSON.stringify(state.cards));
        plusCards[plusIndex].count = plusNum
        return {...state, cards: [...plusCards]}
      case CARD_ACTION.MINUS_COUNT: //передаем ID в payload
        const minusIndex = state.cards.findIndex(item => item.id === action.payload);
        const minusCardsForChange = state.cards.filter(item => item.id === action.payload);
        let minusNum = minusCardsForChange[0].count - 1;
        const minusCards = JSON.parse(JSON.stringify(state.cards));
        minusCards[minusIndex].count = minusNum
        return {...state, cards: [...minusCards]}
      case CARD_ACTION.FILTER_CREATED:
        const sortedCreated  = state.cards.sort(( a, b ) => a.dateFrom - b.dateFrom);
        return {...state, cards: [...sortedCreated]}
      case CARD_ACTION.FILTER_END:
        const sortedEnd  = state.cards.sort(( a, b ) => a.dateTo - b.dateTo);
      return {...state, cards: [...sortedEnd]}  
      default:
        return state
    }
  }

  export const addCardAction = (payload) => ({type: CARD_ACTION.ADD_CARD, payload})
  export const deleteCardAction = (payload) => ({type: CARD_ACTION.DELETE_CARD, payload})
  export const changeCardAction = (payload) => ({type: CARD_ACTION.CHANGE_CARD, payload})
  export const addCountAction = (payload) => ({type: CARD_ACTION.ADD_COUNT, payload})
  export const minusCountAction = (payload) => ({type: CARD_ACTION.MINUS_COUNT, payload})
  export const filterCreated = () => ({type: CARD_ACTION.FILTER_CREATED, payload: null})
  export const filterEnd = () => ({type: CARD_ACTION.FILTER_END, payload: null})

export default cardReducer;
