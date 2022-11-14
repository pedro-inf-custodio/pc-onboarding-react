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

const Detail = ({ showError, setShowError }) => {
  const [detailData, setDetailData] = useState();
  const { media_type, id } = useParams();

  useEffect(() => {
    if (media_type === "movies") {
      fetchDataAPI(
        URL_DETAIL_MOVIE.replace("{id}", id.toString()),
        setDetailData,
        setShowError
      );
    } else if (media_type === "tv") {
      fetchDataAPI(
        URL_DETAIL_TV_SERIES.replace("{id}", id.toString()),
        setDetailData,
        setShowError
      );
    } else if (media_type === "person") {
      fetchDataAPI(
        URL_DETAIL_PERSON.replace("{id}", id.toString()),
        setDetailData,
        setShowError
      );
    }
  }, []);

  return detailData ? (
    <div>
      <div>{showError ? <Error /> : null}</div>

      <div className={showError ? "blur" : ""}>
        <div className="w-screen py-16 pr-32 pl-32">
          <DetailCard detailData={detailData} />
          <Credits detailData={detailData} setDetailData={setDetailData} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Detail;
