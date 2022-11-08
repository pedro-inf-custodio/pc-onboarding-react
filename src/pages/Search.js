import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../components/MoviesList";
import { fetchMovies } from "../helpers/fetchMovies.js";
import { URL_API_SEARCH } from "../helpers/constants.js";

export default function Search() {
  const [movieData, setMovieData] = useState(null);
  const [searchParams] = useSearchParams();
  let input = searchParams.get("search");

  useEffect(() => {
    fetchMovies(URL_API_SEARCH, input).then(({ results }) =>
      setMovieData({ results })
    );
  }, [input]);

  return (
    <div className="pl-32 pr-32 py-20">
      {movieData && <MoviesList popularMoviesData={movieData.results} />}
    </div>
  );
}
