import React from "react";
import { SingleLargeContentCard } from "./SingleLargeContentCard";

export const LargeContentList = ({ contentData, media_type }) => {
  return (
    <div className="w-full h-full pl-32 pr-32">
      <div>
        {contentData.map((data) => (
          <SingleLargeContentCard
            key={data.id.toString()}
            contentData={data}
            media_type={media_type}
          />
        ))}
      </div>
    </div>
  );
};
