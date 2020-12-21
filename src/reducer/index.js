const initialBasketState = {
  basket: [],
};
const basketReducer = (state = initialBasketState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.product] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((b_item) => b_item.id === action.id);
      let n_basket = [...state.basket];
      if (index > -1) {
        n_basket.splice(index, 1);
      } else {
        console.warn("Cannot remove a removed item");
      }
      return { ...state, basket: n_basket };
    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return (state = action.authUser);

    default:
      return state;
  }
};

export { basketReducer, userReducer };
