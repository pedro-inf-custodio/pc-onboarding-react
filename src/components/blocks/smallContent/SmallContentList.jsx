import React from "react";
import { SingleSmallContentCard } from "./SingleSmallContentCard";

export const SmallContentList = ({ fetchedData, media_type }) => {
  return (
    <div className="overflow-x-scroll h-full w-full pb-10">
      <div
        className={`flex flex-row ${
          fetchedData?.length <= 2 ? "justify-around" : "justify-between"
        }`}
      >
        {fetchedData &&
          fetchedData.map((data, index) => (
            <SingleSmallContentCard
              key={data.id.toString()}
              fetchedData={data}
              media_type={media_type}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
