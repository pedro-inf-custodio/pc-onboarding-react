import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  URL_DETAIL_MOVIE,
  URL_DETAIL_TV_SERIES,
  URL_DETAIL_PERSON,
} from "../helpers/constants.js";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import Credits from "../components/blocks/Credits.jsx";
import DetailCard from "../components/blocks/DetailCard.jsx";
import Error from "../components/blocks/Error";
import Loading from "./Loading";
import setLocalStoragePrevPage from "../helpers/setLocalStoragePrevPage.js";

const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [showError, setShowError] = useState(false);
  const { media_type, id } = useParams();
  const location = useLocation();

  const mediaTypeFetch = (url) => {
    fetchDataAPI(
      url.replace("{id}", id.toString()),
      setDetailData,
      setShowError
    );
  };

  useEffect(() => {
    if (media_type === "movies") {
      mediaTypeFetch(URL_DETAIL_MOVIE);
    } else if (media_type === "tv") {
      mediaTypeFetch(URL_DETAIL_TV_SERIES);
    } else if (media_type === "people") {
      mediaTypeFetch(URL_DETAIL_PERSON);
    } else {
      setShowError(true);
    }
    setLocalStoragePrevPage(location.pathname);
  }, [media_type, id]);

  return detailData && showError === false ? (
    <div className={showError ? "blur" : ""}>
      <div className="w-screen py-24 pr-32 pl-32">
        <DetailCard detailData={detailData} media_type={media_type} />
        <Credits detailData={detailData} />
      </div>
    </div>
  ) : showError === true ? (
    <div>
      {showError ? (
        <Error showError={showError} setShowError={setShowError} />
      ) : null}
    </div>
  ) : (
    <Loading />
  );
};

export default Detail;
