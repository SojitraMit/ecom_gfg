import React from "react";
import { useSelector } from "react-redux";

const Bill = () => {
  const cartProducts = useSelector((store) => store.store.cartProducts);

  const totalItems = cartProducts.length;
  if (cartProducts.length === 0) return null;

  const totalPrice = cartProducts.reduce((acc, item) => acc + item.price, 0);

  // Same discount logic you used in ProductCard
  const totalOriginalPrice = cartProducts.reduce(
    (acc, item) => acc + (item.price + 99),
    0
  );

  const discount = totalOriginalPrice - totalPrice;
  const deliveryCharges = totalItems > 0 ? 10 : 0;
  const totalAmount = totalPrice + deliveryCharges;

  return (
    <div className="w-[380px] h-[330px] bg-white ml-[730px] fixed ">
      <div className="m-5">
        <h1 className="text-3xl">Price Detail</h1>
        <p>---------------------------------------------</p>

        <div className="flex justify-between mb-1">
          <p>Price({totalItems} items)</p>
          <p>{totalOriginalPrice}$</p>
        </div>

        <div className="flex justify-between mb-1">
          <p>Discount</p>
          <p>-{discount}$</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>{deliveryCharges}$</p>
        </div>

        <p>---------------------------------------------</p>

        <div className="flex justify-between">
          <p className="text-xl">Total Amount</p>
          <p className="text-xl">{totalAmount}$</p>
        </div>

        <p>---------------------------------------------</p>

        <button className="bg-red-500 text-white w-full h-10 mt-2 hover:bg-red-300">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Bill;
