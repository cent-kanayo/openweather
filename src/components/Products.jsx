import React, { useRef } from "react";
import { useGlobalContext } from "../context";

import SingleProducts from "./SingleProducts";

const Products = () => {
  const {
    filterProducts: products,
    loading,
    error,
    filterByCategory,
    handleSearch,
  } = useGlobalContext();
  const userInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.current.value) return;
    handleSearch(userInput.current.value);
  };

  if (loading) return <div className="loading"></div>;
  if (error)
    return <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>;

  if (products.length < 1) return <h1>No products found</h1>;
  return (
    <>
      <div>
        <div className="border border-gray-300 w-96 px-3 py-2">
          <form className="flex space-x-5" onSubmit={handleSubmit}>
            <input
              type="text"
              ref={userInput}
              placeholder="Search"
              className="hover:outline-none ring-orange-500 hover:ring px-2 rounded-md"
            />
            <input type="submit" />
          </form>
        </div>
        <h3>Category</h3>
        <div className="mb-4 bg-orange-300 flex gap-10 p-2">
          <button onClick={() => filterByCategory("all")}>All</button>
          <button onClick={() => filterByCategory("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterByCategory("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterByCategory("jewelery")}>
            Jewelries
          </button>
          <button onClick={() => filterByCategory("electronics")}>
            Electronics
          </button>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap container mx-auto">
        {products?.map((product) => {
          return <SingleProducts key={product?.id} item={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
