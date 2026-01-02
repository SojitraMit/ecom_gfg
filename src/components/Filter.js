import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProducts } from "../utils/storeSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState();
  const [price, setPrice] = useState(200);

  const {
    allProducts,
    clotheProducts,
    electronicProducts,
    furnitureProducts,
    shoesProducts,
    miscellaneousProducts,
    selectedProducts,
    selectedCategory,
  } = useSelector((store) => store.store);

  const handlePriceChange = (e) => {
    setSortType(null);
    const value = Number(e.target.value);
    setPrice(value);

    // 1️⃣ Decide base list (VERY IMPORTANT)
    let baseProducts = allProducts;

    if (selectedCategory === "Clothes") baseProducts = clotheProducts;
    if (selectedCategory === "Electronics") baseProducts = electronicProducts;
    if (selectedCategory === "Furniture") baseProducts = furnitureProducts;
    if (selectedCategory === "Shoes") baseProducts = shoesProducts;
    if (selectedCategory === "Miscellaneous")
      baseProducts = miscellaneousProducts;

    // 2️⃣ If max price → show all of that category
    if (value === 200) {
      dispatch(
        addSelectedProducts({
          products: baseProducts,
          category: selectedCategory,
        })
      );
      return;
    }

    // 3️⃣ Filter from BASE, not selectedProducts
    const filteredProducts = baseProducts.filter(
      (product) => product.price <= value
    );

    dispatch(
      addSelectedProducts({
        products: filteredProducts,
        category: selectedCategory,
      })
    );
  };

  const handleSort = (type) => {
    setSortType(type);

    let sortedProducts = [...selectedProducts];

    if (type === "LOW_TO_HIGH") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (type === "HIGH_TO_LOW") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    dispatch(
      addSelectedProducts({
        products: sortedProducts,
        category: selectedCategory,
      })
    );
  };

  return (
    <div className=" shadow-inner">
      <div className="p-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Filter</h1>
          <p
            className="underline text-red-600 cursor-pointer"
            onClick={() => {
              setSortType(null);
              dispatch(
                addSelectedProducts({
                  products: allProducts,
                  category: "All Products",
                })
              );
            }}>
            Clear
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl mt-4">Prices</h1>
          <div className="flex text-sm justify-between">
            <p>0$</p>

            <p>50$</p>
            <p>100$</p>

            <p>150$</p>

            <p>max</p>
          </div>

          <input
            className="slider w-[95%] cursor-pointer"
            type="range"
            min="0"
            step="50"
            max="200"
            value={price}
            onChange={handlePriceChange}
          />
          <p>Price up to: ${price}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-4">Category</h1>

          {/* All Products */}
          {/* All Products */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: allProducts,
                  category: "All Products",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "All Products"}
              readOnly
            />{" "}
            All
          </div>

          {/* Clothes */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: clotheProducts,
                  category: "Clothes",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "Clothes"}
              readOnly
            />{" "}
            Clothes
          </div>

          {/* Electronics */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: electronicProducts,
                  category: "Electronics",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "Electronics"}
              readOnly
            />{" "}
            Electronics
          </div>

          {/* Furniture */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: furnitureProducts,
                  category: "Furniture",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "Furniture"}
              readOnly
            />{" "}
            Furniture
          </div>

          {/* Shoes */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: shoesProducts,
                  category: "Shoes",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "Shoes"}
              readOnly
            />{" "}
            Shoes
          </div>

          {/* Miscellaneous */}
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: miscellaneousProducts,
                  category: "Miscellaneous",
                })
              )
            }>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "Miscellaneous"}
              readOnly
            />{" "}
            Miscellaneous
          </div>
        </div>
        <h1 className="font-bold text-xl mt-4">Sort By</h1>

        <div
          className="cursor-pointer"
          onClick={() => handleSort("LOW_TO_HIGH")}>
          <input
            type="radio"
            name="sort"
            checked={sortType === "LOW_TO_HIGH"}
            readOnly
          />{" "}
          Price - Low To High
        </div>

        <div
          className="cursor-pointer"
          onClick={() => handleSort("HIGH_TO_LOW")}>
          <input
            type="radio"
            name="sort"
            checked={sortType === "HIGH_TO_LOW"}
            readOnly
          />{" "}
          Price - High To Low
        </div>
      </div>
    </div>
  );
};

export default Filter;
