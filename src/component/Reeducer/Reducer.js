export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => basket?.Reducer((amount, item) => item.price + amount, 0);

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default Reducer;
