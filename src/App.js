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
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import reducer from "./reducer";

const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
};

const App = () => {
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

  const addToCart = (cartItem) => {
    const isItemInCart = state.cart.find((item) => item.id === cartItem.id);
    if (isItemInCart) {
      dispatch({ type: UPDATE_CART, payload: cartItem });
    } else {
      dispatch({ type: ADD_TO_CART, payload: cartItem });
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(state.cart);
  return (
    <>
      <Header />
      <div className="flex container mx-auto">
        <div className="w-1/9">
          <Products
            products={state.products}
            loading={state.loading}
            error={state.error}
            addToCart={addToCart}
          />
        </div>
        <div>
          <Cart
            cart={state.cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
