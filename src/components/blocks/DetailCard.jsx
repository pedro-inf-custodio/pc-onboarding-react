import React from "react";
import TitleLarge from "../atoms/titles/TitleLarge";
import MediumImage from "../atoms/images/MediumImage";
import Tagline from "../atoms/detail/Tagline";
import Description from "../atoms/Description";
import SingleInfoCard from "../atoms/detail/SingleInfoCard";
import { URL_IMAGE_PATH } from "../../helpers/constants";

const DetailCard = ({ detailData }) => {
  return (
    <div className="outline outline-offset-2 rounded outline-1 outline-black/10 bg-gradient-to-b from-stone-200 to-stone-100 p-4">
      <TitleLarge detailData={detailData} />

      <div className="flex flex-col bg-white rounded-lg">
        <MediumImage URL_IMAGE_PATH={URL_IMAGE_PATH} detailData={detailData} />
        <Tagline detailData={detailData} />
        <Description detailData={detailData} overviewTitle={true} />
      </div>

      <div className="flex justify-center flex-row">
        <SingleInfoCard
          infoLabel="Vote Average:"
          data={detailData.vote_average}
        />
        <SingleInfoCard infoLabel="Vote Count:" data={detailData.vote_count} />
        <SingleInfoCard infoLabel="HomePage:" data={detailData.homepage} />
        <SingleInfoCard
          infoLabel="Release Date:"
          data={detailData.release_date}
        />
        <SingleInfoCard
          infoLabel="Popularity Rank:"
          data={detailData.popularity}
        />
      </div>
    </div>
  );
};

export default DetailCard;
