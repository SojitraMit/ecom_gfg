import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartSize = useSelector((store) => store.store.cartProducts.length);
  const wishlistSize = useSelector(
    (store) => store.store.wishlistProducts.length
  );

  return (
    <div className="">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between bg-[#F7F4EC bg-white text-red-500 ">
        <div className="flex h-24 overflow-hidden">
          <img
            className="w-80 h-36 -mt-5 -ml-5 cursor-pointer"
            src="images/logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="flex gap-6  my-auto pr-9">
          <div className="relative">
            {wishlistSize > 0 && (
              <div
                className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full 
                  flex items-center justify-center text-[14px] font-semibold">
                {wishlistSize}
              </div>
            )}

            <span
              className="material-symbols-outlined text-4xl cursor-pointer"
              onClick={() => navigate("/wishlist")}>
              favorite
            </span>
          </div>

          <div className="relative">
            {cartSize > 0 && (
              <div
                className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full 
                  flex items-center justify-center text-[14px] font-semibold">
                {cartSize}
              </div>
            )}
            <span
              className="material-symbols-outlined text-4xl cursor-pointer"
              onClick={() => navigate("/cart")}>
              garden_cart{" "}
            </span>
          </div>

          <span
            className="material-symbols-outlined text-4xl cursor-pointer"
            onClick={() => navigate("/auth/login")}>
            account_circle
          </span>
        </nav>
      </header>
      <div className="h-24"></div>
    </div>
  );
};

export default Header;
