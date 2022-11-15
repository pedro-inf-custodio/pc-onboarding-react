import React from "react";
import { URL_IMAGE_PATH } from "../../../helpers/constants.js";
import { Link } from "react-router-dom";
import SmallImage from "../../atoms/images/SmallImage.jsx";
import TitleMedium from "../../atoms/titles/TitleMedium.jsx";

export const SingleSmallContentCard = ({ fetchedData, media_type }) => {
  return (
    <div className="flex flex-row rounded-lg m-2 ">
      <div className="rounded-lg w-60 shadow-lg">
        <SmallImage
          URL={URL_IMAGE_PATH}
          fetchedData={fetchedData}
          styles="relative rounded"
        />
        <div className="bg-stone-800 text-stone-200 w-full p-2 rounded-b-lg">
          <Link
            to={
              media_type === "movie"
                ? `/movies/${fetchedData.id}`
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
