import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Description = ({ detailData, overviewTitle = false }) => {
  const [rating, setRating] = useState(detailData.vote_average);

  return (
    <div className="flex flex-col mt-2 h-full">
      {overviewTitle ? (
        <p className="font-bold text-center p-4">Overview</p>
      ) : null}
      <p className="text-justify leading-loose flex self-center p-4 ml-2 mr-2">
        {detailData.overview}
      </p>

      <div className="flex flex-col leading-loose">
        <div className="flex flex-row shadow-sm">
          <p className="text-justify font-bold leading-loose flex self-center p-4 ml-2 mr-2">
            Release date
          </p>
          <p className="text-justify leading-loose text-sm flex self-center">
            {detailData.release_date}
          </p>
        </div>

        <div className="flex flex-row shadow-sm p-4 ml-2 mr-2">
          <p className="text-justify font-bold leading-loose flex self-center">
            Vote average
          </p>
          <p className="p-4	text-sm self-center ml-2">
            {detailData.vote_average
              ? detailData.vote_average.toFixed(1)
              : null}
          </p>
          <div className="self-center ">
            <Rating
              className="pb-1 self-center"
              initialValue={detailData.vote_average}
              size={20}
              iconsCount={10}
              transition={true}
              allowFraction={true}
              SVGstyle={{ display: "inline" }}
              onClick={(rate) => setRating(rate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
