import ActionTypes from "./cart.types";

export const createToggleCartHiddenAction = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});

export const createAddItemAction = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});

export const createClearItemAction = (id) => ({
  type: ActionTypes.CLEAR_ITEM,
  payload: id,
});

export const createRemoveItemAction = (id) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: id,
});

export const createClearCartAction = () => ({
  type: ActionTypes.CLEAR_CART,
});
