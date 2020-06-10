export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemIdToRemove) => {
  const targetItem = cartItems.find((item) => item.id === itemIdToRemove);

  if (targetItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemIdToRemove);
  }

  return cartItems.map((item) =>
    item.id === itemIdToRemove ? { ...item, quantity: item.quantity - 1 } : item
  );
};
