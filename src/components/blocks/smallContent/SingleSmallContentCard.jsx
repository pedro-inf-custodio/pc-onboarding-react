import React from "react";
import { URL_IMAGE_PATH } from "../../../helpers/constants.js";
import { Link } from "react-router-dom";
import SmallImage from "../../atoms/images/SmallImage.jsx";
import TitleMedium from "../../atoms/titles/TitleMedium.jsx";

export const SingleSmallContentCard = ({ fetchedData, media_type }) => {
  return (
    <div className="flex flex-row outline outline-offset-2 rounded outline-1 outline-black/10">
      <div className=" bg-stone-100 w-64">
        <Link
          to={
            media_type === "movie"
              ? `/movies/${fetchedData.id}`
              : `/${media_type}/${fetchedData.id}`
          }
        >
          <TitleMedium data={fetchedData} />
        </Link>
        <hr></hr>

        <SmallImage URL={URL_IMAGE_PATH} fetchedData={fetchedData} />

        {fetchedData.vote_average ? (
          <div>
            <p className="flex justify-center p-4">
              Vote average: {fetchedData.vote_average}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
