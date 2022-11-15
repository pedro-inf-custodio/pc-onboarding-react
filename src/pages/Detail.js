import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const Detail = ({ showError, setShowError }) => {
  const [detailData, setDetailData] = useState();
  const { media_type, id } = useParams();

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
    } else if (media_type === "person") {
      mediaTypeFetch(URL_DETAIL_PERSON);
    }
  }, [media_type, id]);

  return detailData ? (
    <div>
      <div>
        {showError ? (
          <Error showError={showError} setShowError={setShowError} />
        ) : null}
      </div>

      <div className={showError ? "blur" : ""}>
        <div className="w-screen py-16 pr-32 pl-32">
          <DetailCard detailData={detailData} />
          <Credits detailData={detailData} setDetailData={setDetailData} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Detail;
