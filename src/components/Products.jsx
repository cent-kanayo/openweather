import React from "react";
import SingleProducts from "./SingleProducts";

const Products = ({ products, loading, error, addToCart }) => {
  if (loading) return <div className="loading"></div>;
  if (error)
    return <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>;
  return (
    <div className="flex gap-4 flex-wrap container mx-auto">
      {products.map((product) => {
        return (
          <SingleProducts key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </div>
  );
};

export default Products;
