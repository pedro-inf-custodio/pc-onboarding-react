import React from "react";
import { URL_IMAGE_PATH } from "../../../helpers/constants.js";
import { Link } from "react-router-dom";
import LargeImage from "../../atoms/images/LargeImage.jsx";
import Description from "../../atoms/Description.jsx";

export const SingleLargeContentCard = ({ contentData, media_type }) => {
  return (
    <div className="shadow rounded mb-2">
      <div className="flex flex-row bg-white rounded-lg">
        <LargeImage
          URL={URL_IMAGE_PATH}
          contentData={contentData}
          styles="rounded-tl-lg rounded-bl-lg"
        />
        <div className="w-full">
          <div className="shadow bg-stone-800 text-white rounded-tr rounded-br">
            <Link
              to={
                media_type === "movie"
                  ? `/movies/${contentData.id}`
                  : `/${media_type}/${contentData.id}`
              }
            >
              <p className="capitalize text-4xl font-bold text-center p-2">
                {contentData.title}
              </p>
            </Link>
          </div>
          <Description detailData={contentData} overviewTitle={true} />
        </div>
      </div>
    </div>
  );
};