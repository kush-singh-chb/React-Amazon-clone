const addProductToBasket = (product) => (dispatch) => {
  dispatch({
    type: "ADD_TO_BASKET",
    product,
  });
};

const removeProductFromBasket = (id) => (dispatch) => {
  console.log("dispatch");
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id,
  });
};

export { addProductToBasket, removeProductFromBasket };
