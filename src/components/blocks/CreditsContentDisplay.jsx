import React from "react";
import SingleContentCard from "../atoms/credits/SingleContentCard";

const CreditsContentDisplay = ({ creditsData, title }) => {
  return (
    <div className="shadow-lg rounded p-1 w-full">
      <p className="flex justify-center font-bold">{title}</p>
      <div className="overflow-auto h-96 p-2">
        {creditsData &&
          creditsData.map((singleData, index) => (
            <SingleContentCard
              contentData={singleData}
              index={index}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default CreditsContentDisplay;
