import React, { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesList";
import { fetchMovies } from "../helpers/fetchMovies.js";
import { URL_API_POPULAR_MOVIES } from "../helpers/constants.js";

const top5Movies = (popularMoviesData) => {
  return popularMoviesData.slice(0, 5);
};

export default function Home() {
  const [popularMoviesData, setPopularMoviesData] = useState();

  useEffect(() => {
    fetchMovies(URL_API_POPULAR_MOVIES).then(({ results }) =>
      setPopularMoviesData({ results })
    );
  }, [!popularMoviesData]);

  return (
    <div className="p-20">
      <span className="flex justify-center text-lg p-4 underline underline-offset-8">
        Most Popular movies
      </span>
      <div>
        {popularMoviesData && (
          <MoviesList
            popularMoviesData={top5Movies(popularMoviesData.results)}
          />
        )}
      </div>
    </div>
  );
}
