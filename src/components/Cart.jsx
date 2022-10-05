import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice } = useGlobalContext();
  return (
    <>
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <hr />
      <div>
        <h3>Total price: ${totalPrice.toFixed(2)}</h3>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
