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
import Button from "../atoms/Button";

const Credits = ({ detailData, setDetailData }) => {
  const [season, SetSeason] = useState(1);
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
      {media_type === "tv" ? (
        <div className="bg-stone-700 rounded flex justify-between">
          <div className="flex justify-center p-2">
            <p className="mr-2 text-stone-100 font-bold">Select a season:</p>
            <DropdownList
              season={season}
              SetSeason={SetSeason}
              Seasons={detailData.number_of_seasons}
            />
          </div>
        </div>
      ) : (
        media_type === "people" && (
          <div className="flex flex-row bg-stone-700 pb-2 rounded text-light">
            <Button
              onClick={() => {
                mediaTypeCreditslFetch(URL_DETAIL_PERSON_MOVIES);
                setIsTvShow(false);
              }}
              buttonText="Movies"
              addedStyles="w-24 mt-2 ml-2 rounded-full font-light bg-white text-black hover:bg-stone-900 hover:text-stone-100"
            />
            <Button
              onClick={() => {
                mediaTypeCreditslFetch(URL_DETAIL_PERSON_TV_SERIES);
                setIsTvShow(true);
              }}
              buttonText="Tv Shows"
              addedStyles="w-24 mt-2 ml-2 rounded-full font-light bg-white text-black hover:bg-stone-900 hover:text-stone-100"
            />
          </div>
        )
      )}

      <div className="flex flex-row justify-around mt-2 rounded-lg p-2">
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.cast : null}
          isTvShow={isTvShow}
          title={"Cast"}
        />
        <CreditsContentDisplay
          creditsData={creditsData ? creditsData.crew : null}
          isTvShow={isTvShow}
          title={"Crew"}
        />
      </div>
    </div>
  );
};

export default Credits;
