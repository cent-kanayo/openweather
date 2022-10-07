import React from "react";
import Cart from "../components/Cart";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <div className="flex container mx-auto">
        <div className="w-1/9">
          <Products />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default HomePage;
