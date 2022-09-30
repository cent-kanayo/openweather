import React from "react";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div>
      {cart.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt="" width="50" height="50" />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-slate-900 p-1 rounded-sm text-white"
          >
            rem
          </button>
          <p>{item.amount}</p>
          <button
            onClick={() => addToCart(item)}
            className="bg-slate-900 p-1 rounded-sm text-white"
          >
            add
          </button>
        </article>
      ))}
    </div>
  );
};

export default Cart;
