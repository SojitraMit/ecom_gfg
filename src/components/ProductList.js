import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const allProducts = useSelector((store) => store.store?.allProducts);
  console.log(allProducts);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-8 bg-gray-200">
      {allProducts?.map((products) => (
        <ProductCard product={products} key={products.id} />
      ))}
    </div>
  );
};

export default ProductList;
