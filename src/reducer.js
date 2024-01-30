export const initialState = {
  basket: [],
};

export const getTotalBasket = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE":
      // const index = state.basket.findIndex((basketItem) => {
      //   return basketItem.id === action.id;
      // });

      // let newBasket = [...state.basket];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(`${action.id} is not present`);
      // }
      let newBasket = [...state.basket];
      let filterBasket = newBasket.filter((basketItem) => {
        return basketItem.id !== action.id;
      });
      return {
        ...state,
        basket: filterBasket,
      };
    default:
      return state;
  }
};
export default reducer;
