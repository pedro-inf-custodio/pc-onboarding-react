import { configureStore, createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: [],
  },
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});
export const actions = ratingSlice.actions;
export const store = configureStore({ reducer: ratingSlice.reducer });
