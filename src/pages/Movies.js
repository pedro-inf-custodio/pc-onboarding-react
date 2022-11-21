import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_TOP_RATED_MOVIES } from "../helpers/constants.js";
import MovieHeaderImage from "../assets/movie-start.jpg";
import Pagination from "../components/blocks/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { initialStatePages } from "../helpers/initialStatePages";
import setLocalStoragePrevPage from "../helpers/setLocalStoragePrevPage";

const Movies = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [moviesData, setMoviesData] = useState();
  const [page, setPage] = useState(initialStatePages(location));

  useEffect(() => {
    setPage(Number(location.search.split("=")[1]));
  }, [location.search]);

  useEffect(() => {
    document.title = `/movies?page=${page}`;

    fetchDataAPI(
      URL_API_TOP_RATED_MOVIES.replace("{page_number}", page.toString()),
      setMoviesData
    );
    navigate("/movies?page=" + page);
    setLocalStoragePrevPage("/movies?page=" + page);
  }, [page]);

  return (
    <div className="mt-16 flex-row ">
      <div
        style={{ backgroundImage: `url(${MovieHeaderImage})` }}
        className="relative h-80 shadow bg-fixed bg-cover bg-top saturate-50"
      >
        <span className="absolute top-0 left-0 font-bold text-9xl p-4 text-white">
          200 Top Rated Movies
        </span>
      </div>

      <div>
        <div className="flex w-full justify-center">
          <Pagination page={page} setPage={setPage} />
        </div>
        <div className="p-10">
          {moviesData && (
            <LargeContentList
              contentData={moviesData.results}
              media_type="movies"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
