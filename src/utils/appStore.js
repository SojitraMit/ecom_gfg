import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";

const appStore = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export default appStore;
