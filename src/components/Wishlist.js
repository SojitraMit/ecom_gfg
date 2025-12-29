import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

import WishlistCard from "./WishlistCard";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlistProducts = useSelector((store) => store.store.wishlistProducts);
  return (
    <div>
      <Header />
      <div className="mt-6">
        <div className="text-center">
          <h1 className="text-4xl mb-6 font-bold text-yellow-950">
            My Wishlist
          </h1>
        </div>
        {wishlistProducts.length > 0 ? (
          <div className="flex flex-wrap gap-10 justify-center pt-8 ">
            {wishlistProducts.map((products) => (
              <WishlistCard product={products} id={products.id} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h1 className="mt-44 text-xl font-bold">Wishlist Empty</h1>
            <p
              className="text-red-600 underline hover:text-red-300 cursor-pointer"
              onClick={() => navigate("/")}>
              Click to add items to wishlist
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
