import React from "react";
import Button from "../atoms/Button";
import DropdownList from "../atoms/dropdowns/DropdownList";
import {
  URL_DETAIL_PERSON_MOVIES,
  URL_DETAIL_PERSON_TV_SERIES,
} from "../../helpers/constants";
const NavigationDetail = ({
  media_type,
  season,
  SetSeason,
  data,
  isTvShow,
  setIsTvShow,
  mediaTypeCreditslFetch,
}) => {
  return (
    <div>
      {media_type === "tv" ? (
        <div className="bg-stone-700 rounded flex justify-between">
          <div className="flex justify-center p-2">
            <p className="mr-2 text-stone-100 font-bold">Select a season:</p>
            <DropdownList
              season={season}
              SetSeason={SetSeason}
              Seasons={data.number_of_seasons}
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
              addedStyles={`w-24 mt-2 ml-2 rounded-full font-light hover:bg-stone-900 hover:text-stone-100 ${
                isTvShow
                  ? "bg-white text-black"
                  : "bg-stone-900 text-stone-100 font-bold"
              }`}
            />
            <Button
              onClick={() => {
                mediaTypeCreditslFetch(URL_DETAIL_PERSON_TV_SERIES);
                setIsTvShow(true);
              }}
              buttonText="Tv Shows"
              addedStyles={`w-24 mt-2 ml-2 rounded-full font-light hover:bg-stone-900 hover:text-stone-100 ${
                !isTvShow
                  ? "bg-white text-black"
                  : "bg-stone-900 text-stone-100 font-bold"
              }`}
            />
          </div>
        )
      )}
    </div>
  );
};

export default NavigationDetail;
