import React from "react";
import { URL_IMAGE_PATH } from "../../../helpers/constants.js";
import { Link, useLocation } from "react-router-dom";
import SmallImage from "../../atoms/images/SmallImage.jsx";
import TitleMedium from "../../atoms/titles/TitleMedium.jsx";
import RankingCircle from "../../atoms/RankingCircle.jsx";

export const SingleSmallContentCard = ({ fetchedData, media_type, index }) => {
  let location = useLocation();

  return (
    <div className="flex flex-row rounded-lg m-2">
      <div className="rounded-lg w-60 shadow-lg relative">
        {location.pathname !== "/results" ? (
          <RankingCircle
            ranking={(location.search.split("=")[1] - 1) * 20 + index + 1}
          />
        ) : (
          <RankingCircle ranking={fetchedData.vote_average} />
        )}

        <SmallImage
          URL={URL_IMAGE_PATH}
          fetchedData={fetchedData}
          stylesDiv="relative rounded "
          stylesImg="rounded-t-lg"
        />
        <div className="grid content-center bg-stone-800 text-stone-200 w-full p-2 h-[70px] rounded-b-lg">
          <Link
            to={
              media_type === "movie"
                ? `/movies/${fetchedData.id}`
                : media_type === "person"
                ? `/people/${fetchedData.id}`
                : `/${media_type}/${fetchedData.id}`
            }
          >
            {fetchedData ? <TitleMedium data={fetchedData} /> : null}
          </Link>
        </div>
      </div>
    </div>
  );
};
