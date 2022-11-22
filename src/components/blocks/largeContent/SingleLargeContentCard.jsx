import React from "react";
import { URL_IMAGE_PATH } from "../../../helpers/constants.js";
import { Link, useLocation } from "react-router-dom";
import LargeImage from "../../atoms/images/LargeImage.jsx";
import Description from "../description/Description.jsx";
import TitleLarge from "../../atoms/titles/TitleLarge.jsx";
import RankingCircle from "../../atoms/RankingCircle.jsx";

export const SingleLargeContentCard = ({ contentData, media_type, index }) => {
  let location = useLocation();

  return (
    <div className="shadow rounded mb-2">
      <div className="flex flex-row bg-white rounded-lg relative">
        {location.search === "" ? (
          <RankingCircle ranking={index + 1} />
        ) : (
          <RankingCircle
            ranking={(location.search.split("=")[1] - 1) * 20 + index + 1}
          />
        )}
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
              <TitleLarge detailData={contentData} />
            </Link>
          </div>
          <Description
            detailData={contentData}
            overviewTitle={media_type === "person" ? false : true}
            media_type={media_type}
          />
        </div>
      </div>
    </div>
  );
};
