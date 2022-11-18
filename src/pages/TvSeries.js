import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_TOP_RATED_TV_SERIES } from "../helpers/constants.js";
import TvHeaderImage from "../assets/tvseries-start.jpg";
import Pagination from "../components/blocks/Pagination";
import { useNavigate } from "react-router-dom";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData";
import { initialStatePages } from "../helpers/initialStatePages";

const TvSeries = () => {
  const token = getLocalStorageData("token");
  const [tvData, setTvData] = useState();
  const [page, setPage] = useState(initialStatePages(token));
  let navigate = useNavigate();

  useEffect(() => {
    fetchDataAPI(
      URL_TOP_RATED_TV_SERIES.replace("{page_number}", page.toString()),
      setTvData
    );
    navigate("/tv?page=" + page);
    localStorage.setItem("previousPage_" + token.token, "/tv?page=" + page);
  }, [page]);

  return (
    <div className="mt-10 flex-row ">
      <div
        style={{ backgroundImage: `url(${TvHeaderImage})` }}
        className="relative h-96 shadow bg-fixed bg-cover bg-bottom saturate-50"
      >
        <div className="absolute top-0 left-0 font-bold text-9xl p-4 text-stone-900">
          <span className="p-4 text-stone-900">200 Top Rated </span>
          <span className="p-4 text-white">Tv Shows</span>
        </div>
      </div>

      <div>
        <div className="flex w-full justify-center">
          <Pagination page={page} setPage={setPage} />
        </div>
        <div className="p-10">
          {tvData && (
            <LargeContentList contentData={tvData.results} media_type="tv" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
