import React from "react";

function SingleInfoCard({ infoLabel, data }) {
  return data ? (
    <div className="flex flex-col">
      <p className="font-bold text-center p-4">{infoLabel}</p>
      <p className="flex justify-center p-4">{data}</p>
    </div>
  ) : null;
}

export default SingleInfoCard;
