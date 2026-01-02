import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";
import loginReducer from "./loginSlice";

const appStore = configureStore({
  reducer: {
    store: storeReducer,
    login: loginReducer,
  },
});

export default appStore;
