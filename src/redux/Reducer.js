const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.product.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload.product, quantity: action.payload.quantity }]
        };
      }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
      case 'REMOVE_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
    default:
      return state;
  }
};

export default cartReducer;
