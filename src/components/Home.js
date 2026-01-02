/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addSelectedProducts } from "../utils/storeSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allProducts = useSelector((store) => store.store.allProducts);

  const clotheProducts = useSelector((store) => store.store.clotheProducts);
  const electronicProducts = useSelector(
    (store) => store.store.electronicProducts
  );
  const furnitureProducts = useSelector(
    (store) => store.store.furnitureProducts
  );
  const shoesProducts = useSelector((store) => store.store.shoesProducts);
  const miscellaneousProducts = useSelector(
    (store) => store.store.miscellaneousProducts
  );

  const handleCategoryClick = (products, category) => {
    dispatch(addSelectedProducts({ products: products, category: category }));
    navigate("/product");
  };

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="p-9  flex flex-wrap  justify-center gap-x-20 gap-y-10 ">
          {/* <img
            className=" w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/all.png"
            alt="all"
            onClick={() => handleCategoryClick(allProducts, "All Products")}
          /> */}
          <img
            className="w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/clothe.png"
            alt="clothes"
            onClick={() => handleCategoryClick(clotheProducts, "Clothes")}
          />

          <img
            className=" w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/electronics.png"
            alt="electronics"
            onClick={() =>
              handleCategoryClick(electronicProducts, "Electronics")
            }
          />
          <img
            className=" w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/furniture.png"
            alt="furniture"
            onClick={() => handleCategoryClick(furnitureProducts, "Furniture")}
          />
          <img
            className=" w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/shoes.png"
            alt="alshoes"
            onClick={() => handleCategoryClick(shoesProducts, "Shoes")}
          />
          <img
            className=" w-[360px] rounded-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            src="/images/miscellaneous.png"
            alt="all"
            onClick={() =>
              handleCategoryClick(miscellaneousProducts, "Miscellaneous")
            }
          />
        </div>
        <img
          className="h-[700px] w-[1400px] mx-auto cursor-pointer"
          src="images/offer.png"
          onClick={() => handleCategoryClick(allProducts, "All Products")}
        />
        <div className="flex pt-10  gap-8 bg-white h-56 overflow-hidden">
          <img
            className="ml-96 h-36 -mr-12 "
            src="https://th.bing.com/th/id/OIP.fLImCF9nZsbMOkFAWgBtiwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          />
          <img
            className="h-48 -mt-5 overflow-hidden -mr-9
             "
            src="https://th.bing.com/th/id/OIP.YLjtdkOKSK3trC72R14eQQAAAA?w=184&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          />
          <img
            className="h-28 mt-6"
            src="https://th.bing.com/th/id/OIP.HsEahpOEvF5ZYlusObagmQHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          />
          <img
            className="h-36"
            src="https://th.bing.com/th/id/OIP.LwP9bvD_QZZhfubvsRWK2gHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          />
          <img
            className="h-28 mt-6"
            src="https://th.bing.com/th?q=Puma+Logo+Black+Round+Shape&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
