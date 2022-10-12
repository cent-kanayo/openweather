import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleProducts = ({ item }) => {
  const { price, title, image } = item;
  const { addToCart } = useGlobalContext();
  return (
    <Link to={`/products/${title}`}>
      <article className="bg-slate-900 text-white w-80 p-2 mb-6">
        <img src={image} alt="" className="image mb-4" />
        <div>
          <div>
            <h3 className="text-lg font-bold mb-4">{title.toLowerCase()}</h3>
          </div>
          <p>${price}</p>
        </div>
        <button
          onClick={() => addToCart(item)}
          className="bg-orange-600 p-2 text-center rounded-md mt-4"
        >
          Add To Cart
        </button>
      </article>
    </Link>
  );
};

export default SingleProducts;
