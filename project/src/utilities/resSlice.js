import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
  name: "restaurant",
  initialState: {
    fetchedRes: [],
  },
  reducers: {
    setFetchedRestaurants: (state, action) => {
        state.fetchedRes.push(...action.payload);
    },
  },
});

export const { setFetchedRestaurants } = resSlice.actions;

export default resSlice.reducer;
