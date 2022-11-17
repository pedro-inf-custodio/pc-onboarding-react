import React from "react";
import TitleLarge from "../atoms/titles/TitleLarge";
import MediumImage from "../atoms/images/MediumImage";
import Tagline from "../atoms/detail/Tagline";
import Description from "./Description";
import { URL_IMAGE_PATH } from "../../helpers/constants";

const DetailCard = ({ detailData }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg">
      <div className="rounded-t-lg bg-stone-800 text-white">
        <TitleLarge detailData={detailData} />
      </div>

      <p className="flex justify-center p-2 text-lg">
        {detailData.title !== detailData.original_title ||
        detailData.name !== detailData.original_name
          ? `${detailData.original_title ? detailData.original_title : ""}`
          : ""}
      </p>
      <MediumImage URL_IMAGE_PATH={URL_IMAGE_PATH} detailData={detailData} />
      <Tagline detailData={detailData} />
      <Description detailData={detailData} overviewTitle={true} />
    </div>
  );
};

export default DetailCard;
