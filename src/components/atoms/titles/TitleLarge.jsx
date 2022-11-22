import React from "react";

const TitleLarge = ({ detailData }) => {
  return (
    <div>
      <p className="capitalize text-3xl text-center py-4 font-bold">
        {`${detailData.title ? detailData.title : detailData.name}`}
      </p>
    </div>
  );
};

export default TitleLarge;
