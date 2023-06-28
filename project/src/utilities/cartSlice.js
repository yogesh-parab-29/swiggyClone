import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    lastItemResId: null,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.items.length < 1) {
        state.lastItemResId = action.payload.resKey;
        console.log(state.lastItemResId);
        state.items.push(action.payload.card.info);
      } else {
        if (action.payload.resKey === state.lastItemResId) {
          state.items.push(action.payload);
        } else {
          console.log("okay");
        }
      }
    },
    removeFromCart: (state, action) => {
      items.state.pop();
    },
    clearCart: (state, action) => {
      items.state = [];
    },
    setLastItemResId: (state, action) => {
      state.lastItemResId = action.payload;
    },
  },
});
export const { addToCart, removeFromCart, clearCart, setLastItemResId } =
  cartSlice.actions;

export default cartSlice.reducer;
