import { createSelector } from "reselect";

// take the whole state and return certain portion of it
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
);
