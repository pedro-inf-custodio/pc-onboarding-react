import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_SEARCH } from "../helpers/constants.js";
import SearchContentDisplay from "../components/blocks/SearchContentDisplay";
import Error from "../components/blocks/Error";

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
        <SearchContentDisplay
          data={fetchedData}
          media_type="movie"
          title="Movies"
        />

        <SearchContentDisplay
          data={fetchedData}
          media_type="tv"
          title="Tv Series"
        />

        <SearchContentDisplay
          data={fetchedData}
          media_type="person"
          title="People"
        />
      </div>
    </div>
  );
}
