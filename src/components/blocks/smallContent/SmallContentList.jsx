import React from "react";
import { SingleSmallContentCard } from "./SingleSmallContentCard";

export const SmallContentList = ({ fetchedData, media_type }) => {
  return (
    <div className="pl-4 pr-4 p-4">
      <div className="flex flex-row justify-evenly">
        {fetchedData.map((data) => (
          <SingleSmallContentCard
            key={data.id.toString()}
            fetchedData={data}
            media_type={media_type}
          />
        ))}
      </div>
    </div>
  );
};
