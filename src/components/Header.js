import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between bg-gray-800 text-slate-50 p-7">
        <div>
          <h1 className="text-4xl pl-1 ">Shop It</h1>
        </div>
        <nav className="flex gap-6 pr-1 ">
          <span className="material-symbols-outlined text-4xl cursor-pointer">
            favorite
          </span>
          <span className="material-symbols-outlined text-4xl cursor-pointer">
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
