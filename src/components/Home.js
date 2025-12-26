import React from "react";
import Header from "./Header";
import useAllProducts from "../hooks/useAllProducts";
import ProductList from "./ProductList";

const Home = () => {
  useAllProducts();
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default Home;
