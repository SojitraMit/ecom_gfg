import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartProducts, removeWishlistProducts } from "../utils/storeSlice";

const WishlistCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((store) => store.store.cartProducts);

  const isInCart = cartProducts.some((item) => item.id === product.id);

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img
          className="card-image h-[298.4px] w-[298.4px] object-cover"
          src={
            product.images?.[0]
              ? product.images[0]
              : "https://kpfinder.com/assets/default_product.jpg"
          }
          alt="shoes"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://kpfinder.com/assets/default_product.jpg";
          }}
        />
      </div>
      <div className="card-details">
        <div className="card-title h-16 overflow-hidden">{product.title}</div>
        <div className="card-description">
          <p className="card-des text-xs">
            {product.description.slice(0, 70)}
            {product.description.length > 50 && "......"}
          </p>

          <p className="card-price ">
            {product.price}$
            <span className="price-strike-through mx-3">
              {product.price + 97}$
            </span>
            <span className="discount">
              (
              {Math.round(
                ((product.price + 99 - product.price) / (product.price + 99)) *
                  100
              )}
              % OFF)
            </span>
          </p>
        </div>
        <div className="cta-btn ">
          <button
            className="button btn-primary bg-red-600 rounded-lg btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin h-11"
            onClick={() => dispatch(removeWishlistProducts(product))}>
            <span class="material-symbols-outlined text-3xl cursor-pointer">
              delete
            </span>
            Remove
          </button>

          {isInCart ? (
            <button
              className="button btn-primary bg-green-600 rounded-lg  btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin h-11"
              onClick={() => navigate("/cart")}>
              <span className="material-symbols-outlined text-3xl cursor-pointer">
                shopping_cart_checkout
              </span>
              Go To Cart
            </button>
          ) : (
            <button
              className="button btn-primary rounded-lg   btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin h-11"
              onClick={() => dispatch(addCartProducts(product))}>
              <span className="material-symbols-outlined text-3xl cursor-pointer">
                add_shopping_cart
              </span>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
