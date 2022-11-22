import React, { useState, useEffect } from "react";
import { LargeContentList } from "../components/blocks/LargeContent/LargeContentList";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_TOP_RATED_TV_SERIES } from "../helpers/constants.js";
import TvHeaderImage from "../assets/tvseries-start.jpg";
import Pagination from "../components/blocks/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { initialStatePages } from "../helpers/initialStatePages";
import setLocalStoragePrevPage from "../helpers/setLocalStoragePrevPage";

const TvSeries = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [tvData, setTvData] = useState();
  const [page, setPage] = useState(initialStatePages(location));

  useEffect(() => {
    setPage(Number(location.search.split("=")[1]));
  }, [location.search]);

  useEffect(() => {
    document.title = `/tv?page=${page}`;

    fetchDataAPI(
      URL_TOP_RATED_TV_SERIES.replace("{page_number}", page.toString()),
      setTvData
    );
    navigate("/tv?page=" + page);
    setLocalStoragePrevPage("/tv?page=" + page);
  }, [page]);

  return (
    <div className="mt-16 flex-row ">
      <div
        style={{ backgroundImage: `url(${TvHeaderImage})` }}
        className="relative h-80 shadow bg-fixed bg-cover bg-bottom saturate-50"
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
