import React from "react";

const Tagline = ({ detailData }) => {
  return (
    <div>
      {detailData.tagline ? (
        <p className="font-bold text-center p-4">{detailData.tagline}</p>
      ) : null}
    </div>
  );
};

export default Tagline;
