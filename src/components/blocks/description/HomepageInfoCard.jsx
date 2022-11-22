import React from "react";
import SingleInfoCard from "../../atoms/detail/SingleInfoCard";

const HomepageInfoCard = ({ detailData }) => {
  return (
    <div>
      {detailData.homepage ? (
        <div className="shadow-sm">
          <SingleInfoCard
            labelTv={"HomePage"}
            labelPerson={"HomePage"}
            attributeTv={
              detailData.homepage ? (
                <a href={detailData.homepage}> {detailData.homepage}</a>
              ) : null
            }
            attributePerson={
              detailData.homepage ? (
                <a href={detailData.homepage}> {detailData.homepage}</a>
              ) : null
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default HomepageInfoCard;
