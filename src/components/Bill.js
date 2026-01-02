import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/storeSlice";

const Bill = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.store.cartProducts);

  const totalItems = cartProducts.length;
  if (totalItems === 0) return null;

  const totalPrice = cartProducts.reduce((acc, item) => acc + item.price, 0);

  const totalOriginalPrice = cartProducts.reduce(
    (acc, item) => acc + (item.price + 99),
    0
  );

  const discount = totalOriginalPrice - totalPrice;
  const deliveryCharges = totalItems > 0 ? 10 : 0;
  const totalAmount = totalPrice + deliveryCharges;

  // 🔹 Load Razorpay script
  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // 🔹 Razorpay Payment Handler
  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK", // TEST KEY
      amount: totalAmount * 100, // paise
      currency: "INR",
      name: "Shop It",
      description: "Thank you for shopping with us",
      image:
        "https://lh3.googleusercontent.com/gg/AIJ2gl9SltPPuk8sHuP9SzOTJUjgmnjrD1005_Sn-YItojA7pubhH9IXYPnjPVUgM4kJuj9zcxhqRjRdfiPCRp4BNgLr1wKfCMOGc6hat95dALBjEPOS3p0wC4QsE034zCuZaS1saE4ck3hOQU7f0lRPtKu9dTplJnV4flTIWasvydQscwOxAzm0BuMBY3UuRL4_K4EZj4NQPDTsYH6KX3INKBu4GaBTj7cv6wfxmJaVpwom-H4Mgp243uXqyAOL2ioCuhJQV66qGRh6S3hPFlP9oq3vbK7K2XsXqMHMO_A10ybmU3neh5_gF-z7uFX7Unw6hoJtZZYoSLtzWuGJWjsYodw=s1024-rj",

      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);

        dispatch(clearCart());
        navigate("/");
      },

      theme: {
        color: "#ef4444",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="w-[380px] h-[330px] bg-slate-50 shadow-sm ml-[730px] fixed">
      <div className="m-5">
        <h1 className="text-3xl">Price Detail</h1>
        <p>---------------------------------------------</p>

        <div className="flex justify-between mb-1">
          <p>Price ({totalItems} items)</p>
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

        <button
          onClick={handlePayment}
          className="bg-red-500 text-white w-full h-10 mt-2 hover:bg-red-300">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Bill;
