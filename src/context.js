import React, { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  UPDATE_CART,
} from "./actions";
import reducer from "./reducer";

const AppContent = createContext();

const initialState = {
  loading: false,
  error: false,
  products: [],
  filterProducts: [],
  cart: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    try {
      dispatch({ type: SET_LOADING });
      const { data } = await axios(url);
      dispatch({ type: SET_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR });
    }
  };

  const addToCart = (abc) => {
    const isItemInCart = state.cart.find((item) => item.id === abc.id);
    if (isItemInCart) {
      dispatch({ type: UPDATE_CART, payload: abc });
    } else {
      dispatch({ type: ADD_TO_CART, payload: abc });
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const filterByCategory = (category) => {
    dispatch({ type: "FILTER", payload: category });
  };

  const total = () => {
    return state.cart.reduce(
      (acc, item) => {
        acc.totalAmount = acc.totalAmount + item.amount;
        acc.totalPrice = acc.totalPrice + item.amount * item.price;
        return acc;
      },
      {
        totalPrice: 0,
        totalAmount: 0,
      }
    );
  };

  const { totalAmount, totalPrice } = total();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContent.Provider
      value={{
        ...state,
        removeFromCart,
        addToCart,
        totalAmount,
        totalPrice,
        filterByCategory,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};

export default AppProvider;
