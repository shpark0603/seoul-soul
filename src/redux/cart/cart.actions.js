import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = (id) => ({
  type: CLEAR_ITEM,
  payload: id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
