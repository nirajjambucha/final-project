export const CLEAR_CART = 'CLEAR_CART';
export const addToCart = (product, quantity = 1) => {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity }
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: productId
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: productId
  };
};

export const removeItem = (productId) => {
  return {
    type: 'REMOVE_ITEM',
    payload: productId
  };
};

export const clearCart = () => ({
  type: CLEAR_CART
});