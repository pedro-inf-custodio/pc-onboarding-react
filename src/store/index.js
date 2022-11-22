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
        state.rating.filter(
          (value) => (value.movieId || value.tvId) === action.payload.id
        ).length > 0
          ? state.rating.map((value) =>
              action.payload.media_type === "movies" &&
              value.movieId === action.payload.id
                ? { movieId: action.payload.id, myRating: action.payload.rate }
                : action.payload.media_type === "tv" &&
                  value.tvId === action.payload.id
                ? { tvId: action.payload.id, myRating: action.payload.rate }
                : { ...value }
            )
          : [
              ...state.rating,
              action.payload.media_type === "movies"
                ? { movieId: action.payload.id, myRating: action.payload.rate }
                : { tvId: action.payload.id, myRating: action.payload.rate },
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
