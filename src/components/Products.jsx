import React from "react";
import { useGlobalContext } from "../context";
// import SingleProducts from "./SingleProducts";

const Products = () => {
  const { products, loading, error, filterByCategory, addToCart } =
    useGlobalContext();
  if (loading) return <div className="loading"></div>;
  if (error)
    return <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>;

  return (
    <>
      <div>
        <h3>Category</h3>
        <div className="mb-4 bg-orange-300 flex gap-10 p-2">
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
        {products.map((product) => {
          // return <SingleProducts key={product.id} {...product} />;
          const { image, title, description, price, category } = product;
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
                onClick={() => addToCart(product)}
                className="bg-orange-600 p-2 text-center rounded-md mt-4"
              >
                Add To Cart
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
