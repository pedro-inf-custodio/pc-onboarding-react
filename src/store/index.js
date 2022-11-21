import { configureStore, createSlice } from "@reduxjs/toolkit";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: [],
  },
  reducers: {
    setInit: (state, action) => {
      state.rating = getLocalStorageData("rating_" + action.payload.username)
        ? getLocalStorageData("rating_" + action.payload.username)
        : [];
    },
    setRating: (state, action) => {
      state.rating =
        state.rating.filter((value) => value.movieId === action.payload.id)
          .length > 0
          ? state.rating.map((value) =>
              value.movieId === action.payload.id
                ? { movieId: action.payload.id, myRating: action.payload.rate }
                : { ...value }
            )
          : [
              ...state.rating,
              { movieId: action.payload.id, myRating: action.payload.rate },
            ];

      localStorage.setItem(
        "rating_" + action.payload.token,
        JSON.stringify(state.rating)
      );
    },
  },
});

export const actions = ratingSlice.actions;
export const store = configureStore({
  reducer: ratingSlice.reducer,
});
