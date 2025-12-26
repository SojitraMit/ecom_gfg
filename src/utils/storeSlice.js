import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    allProducts: [],
  },

  reducers: {
    addAllProdects: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addAllProdects } = storeSlice.actions;
export default storeSlice.reducer;
