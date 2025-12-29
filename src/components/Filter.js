import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedProducts } from "../utils/storeSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(300);

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
    if (value === 300) {
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
    let baseProducts = allProducts;

    // Decide base list by category
    if (selectedCategory === "Clothes") baseProducts = clotheProducts;
    if (selectedCategory === "Electronics") baseProducts = electronicProducts;
    if (selectedCategory === "Furniture") baseProducts = furnitureProducts;
    if (selectedCategory === "Shoes") baseProducts = shoesProducts;
    if (selectedCategory === "Miscellaneous")
      baseProducts = miscellaneousProducts;

    let sortedProducts = [...baseProducts];

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
    <div className=" ">
      <div className="p-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Filter</h1>
          <p
            className="underline text-red-600 cursor-pointer"
            onClick={() =>
              dispatch(
                addSelectedProducts({
                  products: allProducts,
                  category: "All Products",
                })
              )
            }>
            Clear
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl mt-4">Prices</h1>
          <div className="flex text-sm justify-between">
            <p>0$</p>

            <p>100$</p>

            <p>200$</p>

            <p>max</p>
          </div>

          <input
            className="slider w-full cursor-pointer"
            type="range"
            min="0"
            step="50"
            max="300"
            value={price}
            onChange={handlePriceChange}
          />
          <p>Price up to: ${price}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-4">Category</h1>
          <input
            type="radio"
            className="cursor-pointer"
            name="category"
            checked={selectedCategory === "All Products"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: allProducts,
                  category: "ALL Products",
                })
              )
            }
          />{" "}
          All
          <br />
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            checked={selectedCategory === "Clothes"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: clotheProducts,
                  category: "Clothes",
                })
              )
            }
          />{" "}
          Clothe
          <br />
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            checked={selectedCategory === "Electronics"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: electronicProducts,
                  category: "Electronics",
                })
              )
            }
          />{" "}
          Electronic
          <br />
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            checked={selectedCategory === "Furniture"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: furnitureProducts,
                  category: "Furniture",
                })
              )
            }
          />{" "}
          Furniture
          <br />
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            checked={selectedCategory === "Shoes"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: shoesProducts,
                  category: "Shoes",
                })
              )
            }
          />{" "}
          Shoes
          <br />
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            checked={selectedCategory === "Miscellaneous"}
            onChange={() =>
              dispatch(
                addSelectedProducts({
                  products: miscellaneousProducts,
                  category: "Miscellaneous",
                })
              )
            }
          />{" "}
          Miscellaneous
          <br />
        </div>
        <h1 className="font-bold text-xl mt-4">Sort By</h1>
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onChange={() => handleSort("LOW_TO_HIGH")}
        />{" "}
        Price - Low To High
        <br />
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onChange={() => handleSort("HIGH_TO_LOW")}
        />{" "}
        Price - High To Low
      </div>
    </div>
  );
};

export default Filter;
