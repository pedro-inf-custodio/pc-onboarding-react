import React from "react";
import SingleContentCard from "../atoms/credits/SingleContentCard";

const CreditsContentDisplay = ({ creditsData, isTvShow, title }) => {
  return (
    <div className="shadow-xl rounded-lg w-full ml-2 mr-2">
      <p className="flex justify-center font-bold rounded-t-lg p-1 text-stone-100 bg-stone-800">
        {title}
      </p>
      <div className="overflow-auto h-96 p-2 overflow-y-scroll">
        {creditsData?.map((singleData, index) => (
          <SingleContentCard
            contentData={singleData}
            index={index}
            isTvShow={isTvShow}
            title={title}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditsContentDisplay;
