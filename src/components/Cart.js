import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import HorizontalCard from "./HorizontalCard";
import Bill from "./Bill";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((store) => store.store.cartProducts);
  return (
    <div>
      <Header />
      <div className="mt-6">
        <div className="text-center">
          <h1 className="text-4xl mb-6 font-bold text-yellow-950">My Cart</h1>
        </div>
        {cartProducts.length > 0 ? (
          <div className="flex justify-center">
            <div>
              {cartProducts.map((products) => (
                <HorizontalCard product={products} id={products.id} />
              ))}
            </div>
            <div className="w-[380px] h-[330px]  ml-12"></div>

            <Bill />
          </div>
        ) : (
          <div className="text-center">
            <h1 className="mt-44 text-xl font-bold">Cart Empty</h1>
            <p
              className="text-red-600 underline hover:text-red-300 cursor-pointer"
              onClick={() => navigate("/")}>
              Click to add items to cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
