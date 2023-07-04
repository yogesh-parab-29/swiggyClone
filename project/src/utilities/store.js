import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import resSlice from "./resSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant : resSlice
  },
});

export default store;
