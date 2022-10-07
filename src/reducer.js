import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  UPDATE_CART,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filterProducts: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
      };
    case UPDATE_CART:
      const updatedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === updatedItem.id
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        ),
      };
    case REMOVE_ITEM:
      const removeItem = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart
          .map((cartItem) =>
            cartItem.id === removeItem.id
              ? { ...cartItem, amount: cartItem.amount - 1 }
              : cartItem
          )
          .filter((item) => item.amount !== 0),
      };
    case "FILTER":
      let tempProducts = state.products.slice();
      if (action.payload === "all") {
        return {
          ...state,
          filterProducts: tempProducts,
        };
      }
      let newProducts = tempProducts.filter(
        (item) => item.category === action.payload
      );

      return {
        ...state,
        filterProducts: newProducts,
      };
    default:
      return state;
  }
};

export default reducer;
