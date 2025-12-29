import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex justify-between bg-[#F7F4EC] text-red-500 ">
        <div className="flex h-24 overflow-hidden">
          <img
            className="w-80 h-36 -mt-5 -ml-5 cursor-pointer"
            src="images/logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="flex gap-6  my-auto pr-9">
          <span
            className="material-symbols-outlined text-4xl cursor-pointer"
            onClick={() => navigate("/wishlist")}>
            favorite
          </span>
          <span
            className="material-symbols-outlined text-4xl cursor-pointer"
            onClick={() => navigate("/cart")}>
            garden_cart{" "}
          </span>
          <span className="material-symbols-outlined text-4xl cursor-pointer">
            account_circle
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
