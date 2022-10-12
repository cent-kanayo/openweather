import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleItem = () => {
  const { products, addToCart } = useGlobalContext();
  const { name } = useParams();

  const productToDisplay = products.find((product) => product.title === name);
  const { title, image, description, price, category } = productToDisplay;
  return (
    <div className="container mx-auto">
      <article className="bg-slate-900 text-white w-80 p-2 mb-6">
        <img src={image} alt="" className="image mb-4" />
        <div>
          <div>
            <h3 className="text-lg font-bold mb-4">{title}</h3>
          </div>
          <h5>{category}</h5>

          <p>${price}</p>
          <p>{description}</p>
        </div>
        <button
          onClick={() => addToCart(productToDisplay)}
          className="bg-orange-600 p-2 text-center rounded-md mt-4"
        >
          Add To Cart
        </button>
      </article>
    </div>
  );
};

export default SingleItem;
