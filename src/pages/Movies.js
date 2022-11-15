import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_TOP_RATED_MOVIES } from "../helpers/constants.js";
import MovieHeaderImage from "../assets/movie-start.jpg";
import Pagination from "../components/blocks/Pagination";

const Movies = () => {
  const [moviesData, setMoviesData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchDataAPI(
      URL_API_TOP_RATED_MOVIES.replace("{page_number}", page.toString()),
      setMoviesData
    );
  }, [page]);

  return (
    <div className="mt-10 flex-row ">
      <div
        style={{ backgroundImage: `url(${MovieHeaderImage})` }}
        className="relative h-96 shadow bg-fixed bg-cover bg-top saturate-50"
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
