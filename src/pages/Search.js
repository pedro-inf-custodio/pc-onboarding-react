import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_SEARCH } from "../helpers/constants.js";
import SearchContentDisplay from "../components/blocks/SearchContentDisplay";
import Error from "../components/blocks/Error";
import MovieHeaderImage from "../assets/movie-start.jpg";
import TvHeaderImage from "../assets/tvseries-start.jpg";
import Oscar from "../assets/oscar.jpg";

export default function Search({ showError, setShowError }) {
  const [fetchedData, setFetchedData] = useState();
  const [searchParams] = useSearchParams();

  let searchUrl = URL_API_SEARCH.replace("{query}", searchParams.get("search"));

  useEffect(() => {
    fetchDataAPI(searchUrl, setFetchedData, setShowError);
  }, [searchUrl]);

  return (
    <div>
      <div>
        {showError ? (
          <Error showError={showError} setShowError={setShowError} />
        ) : null}
      </div>

      <div className={showError ? "blur" : ""}>
        <div
          style={{ backgroundImage: `url(${MovieHeaderImage})` }}
          className="relative h-56 shadow bg-fixed bg-cover saturate-50"
        >
          <span className="absolute top-10 left-0 font-bold text-9xl p-4 text-white">
            Movies
          </span>
        </div>

        <SearchContentDisplay
          data={fetchedData}
          media_type="movie"
          title="Movies"
        />

        <div
          style={{ backgroundImage: `url(${TvHeaderImage})` }}
          className="relative h-56 shadow bg-fixed bg-bottom bg-cover saturate-50"
        >
          <span className="absolute top-10 right-0 font-bold text-9xl p-4 text-white">
            TV Shows
          </span>
        </div>

        <SearchContentDisplay
          data={fetchedData}
          media_type="tv"
          title="Tv Series"
        />

        <div
          style={{ backgroundImage: `url(${Oscar})` }}
          className="relative h-56 shadow bg-fixed bg-top bg-cover saturate-50"
        >
          <span className="absolute top-10 left-0 font-bold text-9xl p-4 text-white">
            People
          </span>
        </div>

        <SearchContentDisplay
          data={fetchedData}
          media_type="person"
          title="People"
        />
      </div>
    </div>
  );
}
