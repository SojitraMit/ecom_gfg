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
    selectedProducts: [],
  },

  reducers: {
    addAllProdects: (state, action) => {
      state.allProducts = action.payload;
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
    addSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
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
  addSelectedProducts,
} = storeSlice.actions;
export default storeSlice.reducer;
