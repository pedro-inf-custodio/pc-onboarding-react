import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_POPULAR_MOVIES } from "../helpers/constants.js";
import { top5PopularMovies } from "../helpers/top5Selection";
import MovieHeaderImage from "../assets/movie-start.jpg";
import { useLocation } from "react-router-dom";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData";
import Error from "../components/blocks/Error";

export default function Home() {
  const [showError, setShowError] = useState(false);
  const [popularMoviesData, setPopularMoviesData] = useState();
  const location = useLocation();
  const token = getLocalStorageData("token");

  useEffect(() => {
    if (!popularMoviesData) {
      fetchDataAPI(URL_API_POPULAR_MOVIES, setPopularMoviesData);
    }
    localStorage.setItem("previousPage_" + token.token, location.pathname);
  }, []);

  return (
    <div>
      {showError ? <Error /> : null}

      <div className={`mt-10 flex-row ${showError ? "blur" : ""}`}>
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
    </div>
  );
}
