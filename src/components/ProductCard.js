import { useDispatch, useSelector } from "react-redux";
import { addCartProducts, addWishlistProducts } from "../utils/storeSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((store) => store.store.cartProducts);
  const wishlistProducts = useSelector((store) => store.store.wishlistProducts);

  const isInCart = cartProducts.some((item) => item.id === product.id);
  const isInWishlist = wishlistProducts.some((item) => item.id === product.id);

  return (
    <div className="card card-vertical d-flex direction-column bg-slate-100  relative shadow-inner">
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
          {isInWishlist ? (
            <button
              className="button btn-primary bg-green-600 rounded-lg btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin h-11"
              onClick={() => navigate("/wishlist")}>
              <span class="material-symbols-outlined text-3xl cursor-pointer">
                heart_check
              </span>
              Go To Wishlist
            </button>
          ) : (
            <button
              className="button btn-primary  btn-icon cart-btn d-flex rounded-lg  align-center justify-center gap cursor btn-margin h-11"
              onClick={() => dispatch(addWishlistProducts(product))}>
              <span className="material-symbols-outlined text-3xl  cursor-pointer ">
                favorite
              </span>
              Add To Wishlist
            </button>
          )}

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

export default ProductCard;
