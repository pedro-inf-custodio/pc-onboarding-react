import React from "react";

const TitleLarge = ({ detailData }) => {
  return (
    <div>
      <p className="capitalize text-3xl text-center py-4 font-bold">
        {`${detailData.title ? detailData.title : detailData.name}
        ${
          detailData.title !== detailData.original_title ||
          detailData.name !== detailData.original_name
            ? `(${
                detailData.original_title
                  ? detailData.original_title
                  : detailData.original_name
              })`
            : ""
        }`}
      </p>
    </div>
  );
};

export default TitleLarge;
