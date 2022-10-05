import React from "react";
import { useGlobalContext } from "../context";

const SingleProducts = ({ id, image, category, title, description, price }) => {
  const { addToCart } = useGlobalContext();
  return (
    <article className="bg-slate-900 text-white w-80 p-2 mb-6">
      <img src={image} alt="" className="image mb-4" />
      <div>
        <div>
          <h3 className="text-lg font-bold mb-4">{title}</h3>
        </div>
        <h5 className="text-lg">{category}</h5>
        <p className="mb-4">{description.slice(0, 100)}...</p>
        <p>${price}</p>
      </div>
      <button
        onClick={() => addToCart({ id, title, image, description, price })}
        className="bg-orange-600 p-2 text-center rounded-md mt-4"
      >
        Add To Cart
      </button>
    </article>
  );
};

export default SingleProducts;
