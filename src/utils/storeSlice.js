import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    allProducts: [],
    clotheProducts: [],
    electronicProducts: [],
    furnitureProducts: [],
    shoesProducts: [],
    miscellaneousProducts: [],
    cartProducts: [],
    wishlistProducts: [],
    selectedProducts: [],
    selectedCategory: "All Products",
  },

  reducers: {
    addAllProdects: (state, action) => {
      state.allProducts = action.payload;
      state.selectedProducts = action.payload;
    },
    addClotheProducts: (state, action) => {
      state.clotheProducts = action.payload;
    },
    addElectronicProducts: (state, action) => {
      state.electronicProducts = action.payload;
    },
    addFurnitureProducts: (state, action) => {
      state.furnitureProducts = action.payload;
    },
    addShoesProducts: (state, action) => {
      state.shoesProducts = action.payload;
    },
    addMiscellaneousProducts: (state, action) => {
      state.miscellaneousProducts = action.payload;
    },
    addCartProducts: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    clearCart: (state, action) => {
      state.cartProducts = [];
    },
    removeCartProducts: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },

    addWishlistProducts: (state, action) => {
      state.wishlistProducts.push(action.payload);
    },
    removeWishlistProducts: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload.products;
      state.selectedCategory = action.payload.category;
    },
  },
});

export const {
  addAllProdects,
  addClotheProducts,
  addElectronicProducts,
  addFurnitureProducts,
  addShoesProducts,
  addMiscellaneousProducts,
  addCartProducts,
  clearCart,
  removeCartProducts,
  addWishlistProducts,
  removeWishlistProducts,
  addSelectedProducts,
} = storeSlice.actions;
export default storeSlice.reducer;
