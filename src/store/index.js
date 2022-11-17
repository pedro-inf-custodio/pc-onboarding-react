import { configureStore, createSlice } from "@reduxjs/toolkit";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData";

const token = getLocalStorageData("token");

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
