import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    lastItemResId: null,
    resMatch: true,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.count += 1;
      }

      if (state.items.length<2){
        state.lastItemResId = newItem.resKey;
      }

      if (state.lastItemResId !== newItem.resKey) {
        state.resMatch = false;
      }
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.count -= 1;

        if (existingItem.count === 0) {
          const itemIndex = state.items.findIndex(
            (item) => item.card.info.id === existingItem.card.info.id
          );
          if (itemIndex !== -1) {
            state.items.splice(itemIndex, 1);
          }
        }
      }
    },
    clearCart: (state, action) => {
      state.items = [];
      state.resMatch = true;
    },
    setLastItemResId: (state, action) => {
      state.lastItemResId = action.payload;
    },
    setResMatch: (state, action) => {
      state.resMatch = action.payload;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  setLastItemResId,
  setResMatch,
} = cartSlice.actions;

export default cartSlice.reducer;
