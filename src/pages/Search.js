import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_API_SEARCH } from "../helpers/constants.js";
import SearchContentDisplay from "../components/blocks/SearchContentDisplay";
import Error from "../components/blocks/Error";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData.js";
import { relevanceOrderSearch } from "../helpers/relevanceOrderSearch.js";
import Loading from "./Loading.js";

export default function Search() {
  const [fetchedData, setFetchedData] = useState();
  const [showError, setShowError] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const token = getLocalStorageData("token");
  const relevanceOrderArray = relevanceOrderSearch(fetchedData);

  let searchUrl = URL_API_SEARCH.replace("{query}", searchParams.get("search"));

  useEffect(() => {
    fetchDataAPI(searchUrl, setFetchedData, setShowError, true);
    localStorage.setItem(
      "previousPage_" + token.token,
      location.pathname + location.search
    );
  }, [searchUrl]);

  return (
    <div className="py-20">
      <div>
        {showError ? (
          <Error showError={showError} setShowError={setShowError} />
        ) : null}
      </div>

      <div className={showError ? "blur" : ""}>
        {relevanceOrderArray ? (
          relevanceOrderArray.map((media_type) => (
            <SearchContentDisplay
              key={media_type}
              data={fetchedData}
              media_type={media_type}
              title={
                media_type === "movie"
                  ? "Movies"
                  : media_type === "tv"
                  ? "Tv Series"
                  : "People"
              }
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
