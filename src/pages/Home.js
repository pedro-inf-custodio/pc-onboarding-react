import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_POPULAR_MOVIES } from "../helpers/constants.js";
import { top5PopularMovies } from "../helpers/top5Selection";
import MovieHeaderImage from "../assets/movie-start.jpg";

export default function Home({ showError, setShowError }) {
  const [popularMoviesData, setPopularMoviesData] = useState();

  useEffect(() => {
    if (!popularMoviesData) {
      fetchDataAPI(URL_API_POPULAR_MOVIES, setPopularMoviesData);
    }
  }, []);

  return (
    <div className="mt-10 flex-row ">
      <div
        style={{ backgroundImage: `url(${MovieHeaderImage})` }}
        className="relative h-96 shadow bg-fixed bg-cover bg-top saturate-50"
      >
        <span className="absolute top-0 font-bold text-9xl p-4 text-white">
          Popular Movies
        </span>
      </div>

      <div className="p-10">
        {popularMoviesData && (
          <LargeContentList
            contentData={top5PopularMovies(popularMoviesData.results)}
            media_type="movies"
          />
        )}
      </div>
    </div>
  );
}
