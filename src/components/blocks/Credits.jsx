import React, { useState, useEffect } from "react";
import DropdownList from "../atoms/dropdowns/DropdownList";
import { fetchDataAPI } from "../../helpers/fetchDataAPI";
import { useParams } from "react-router-dom";
import {
  URL_DETAIL_TV_SERIES_CREDITS,
  URL_DETAIL_MOVIE_CREDITS,
  URL_DETAIL_PERSON_MOVIES,
  URL_DETAIL_PERSON_TV_SERIES,
} from "../../helpers/constants.js";
import CreditsContentDisplay from "./CreditsContentDisplay";

const Credits = ({ detailData, setDetailData }) => {
  const [season, SetSeason] = useState(1);
  const [creditsData, setCreditsData] = useState();
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
    } else if (media_type === "person") {
      mediaTypeCreditslFetch(URL_DETAIL_PERSON_MOVIES);
    }
  }, [season, media_type, id]);

  return (
    <div className="mt-2">
      {media_type === "tv" && (
        <div className="w-full flex justify-center p-2">
          <p>Select a season:</p>
          <DropdownList
            season={season}
            SetSeason={SetSeason}
            Seasons={detailData.number_of_seasons}
          />
        </div>
      )}

      <div className="flex flex-row justify-around">
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.cast : null}
          title={"Cast"}
        />
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.crew : null}
          title={"Crew"}
        />
      </div>
    </div>
  );
};

export default Credits;
