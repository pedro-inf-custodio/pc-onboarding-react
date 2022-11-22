import React, { useState, useEffect } from "react";
import { fetchDataAPI } from "../../helpers/fetchDataAPI";
import { useParams } from "react-router-dom";
import {
  URL_DETAIL_TV_SERIES_CREDITS,
  URL_DETAIL_MOVIE_CREDITS,
  URL_DETAIL_PERSON_MOVIES,
} from "../../helpers/constants.js";
import CreditsContentDisplay from "./CreditsContentDisplay";
import NavigationDetail from "./NavigationDetail";

const Credits = ({ detailData }) => {
  const [season, setSeason] = useState(1);
  const [creditsData, setCreditsData] = useState();
  const [isTvShow, setIsTvShow] = useState(false);
  const { media_type, id } = useParams();

  const mediaTypeCreditslFetch = (url) => {
    fetchDataAPI(url.replace("{id}", id.toString()), setCreditsData);
  };

  useEffect(() => {
    if (media_type === "movies") {
      mediaTypeCreditslFetch(URL_DETAIL_MOVIE_CREDITS);
    } else if (media_type === "tv") {
      mediaTypeCreditslFetch(
        URL_DETAIL_TV_SERIES_CREDITS.replace(
          "{season_number}",
          season.toString()
        )
      );
    } else if (media_type === "people") {
      mediaTypeCreditslFetch(URL_DETAIL_PERSON_MOVIES);
    }
  }, [season, media_type, id]);

  return (
    <div className="mt-2">
      <NavigationDetail
        media_type={media_type}
        season={season}
        setSeason={setSeason}
        data={detailData}
        isTvShow={isTvShow}
        setIsTvShow={setIsTvShow}
        mediaTypeCreditslFetch={mediaTypeCreditslFetch}
      />

      <div className="flex flex-row justify-around mt-2 rounded-lg p-2 ">
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.cast : null}
          isTvShow={isTvShow}
          title="Cast"
        />
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.crew : null}
          isTvShow={isTvShow}
          title="Crew"
        />
      </div>
    </div>
  );
};

export default Credits;
