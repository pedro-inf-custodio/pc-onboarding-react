import React from "react";
import SingleInfoCard from "../../atoms/detail/SingleInfoCard";
import RatingInfoCard from "./RatingInfoCard";
import HomepageInfoCard from "./HomepageInfoCard";

const Description = ({ detailData, overviewTitle = false }) => {
  return (
    <div className="flex flex-col mt-2 h-full">
      {overviewTitle ? (
        <p className="font-bold text-center p-4">
          {detailData.overview || detailData.biography
            ? detailData.overview
              ? "Overview"
              : "Biography"
            : null}
        </p>
      ) : null}
      <p className="text-justify leading-loose flex self-center p-4 ml-2 mr-2">
        {detailData.overview ? detailData.overview : detailData.biography}
      </p>

      <div className="flex flex-col leading-loose">
        <div className="shadow-sm">
          <SingleInfoCard
            labelTv={"Release date"}
            labelPerson={"Birthday"}
            attributeTv={detailData.release_date}
            attributePerson={detailData.birthday}
          />
        </div>

        <RatingInfoCard detailData={detailData} />
        <HomepageInfoCard detailData={detailData} />

        <div className="flex justify-start shadow-sm ">
          <SingleInfoCard
            labelTv={"Duration"}
            labelPerson={"Birth Place"}
            attributeTv={detailData.runtime}
            attributePerson={detailData.place_of_birth}
          />
        </div>

        <div className="flex justify-start shadow-sm ">
          <SingleInfoCard
            labelTv={"Popularity"}
            labelPerson={"Popularity"}
            attributeTv={detailData.popularity}
            attributePerson={detailData.popularity}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
