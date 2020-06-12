import ActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case ActionTypes.CLEAR_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

export default cartReducer;
