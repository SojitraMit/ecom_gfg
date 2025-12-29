import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlistProducts,
  removeCartProducts,
  removeWishlistProducts,
} from "../utils/storeSlice";

const HorizontalCard = ({ product }) => {
  const dispatch = useDispatch();

  const wishlistProducts = useSelector((store) => store.store.wishlistProducts);
  const isInWishlist = wishlistProducts.some((item) => item.id === product.id);

  return (
    <div class="card-horizontal d-flex shadow  mb-5  mx-auto  h-[200px]">
      <div class="card-hori-image-container relative">
        <img
          className="card-image w-[250px] object-cover"
          src={product.images[0]}
          alt="shoes"
        />
        {/* <small class="c-badge bg-primary absolute left-0">Trending</small> */}
      </div>
      <div class="card-details d-flex direction-column w-[430px] h-[220px] -mt-2 ">
        <div class="card-title ">{product.title}</div>
        <div class="card-description">
          <p class="card-des text-xs ">
            {product.description.slice(0, 70)}
            {product.description.length > 50 && "......"}
          </p>
          <p class="card-price my-auto ">
            {product.price}$
            <span class="price-strike-through padding-all-8">
              {product.price + 97}$
            </span>
            <span class="discount padding-all-8">
              (
              {Math.round(
                ((product.price + 99 - product.price) / (product.price + 99)) *
                  100
              )}
              % OFF)
            </span>
          </p>
        </div>
        <div class="quantity-container d-flex gap my-auto">
          <p class="q-title">Quantity: </p>
          <div class="count-container d-flex align-center gap">
            <button class="count">-</button>
            <span class="count-value">1</span>
            <button class="count">+</button>
          </div>
        </div>
        <div class="cta-btn d-flex gap  my-auto">
          <div class="cta-btn">
            <button
              class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor "
              onClick={() => dispatch(removeCartProducts(product))}>
              <span class="material-symbols-outlined  cursor-pointer">
                delete
              </span>
              Remove
            </button>
          </div>
          <div class="cta-btn">
            {isInWishlist ? (
              <button
                class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor "
                onClick={() => dispatch(removeWishlistProducts(product))}>
                Wishlisted
              </button>
            ) : (
              <button
                class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor "
                onClick={() => dispatch(addWishlistProducts(product))}>
                Move to ❤️
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
