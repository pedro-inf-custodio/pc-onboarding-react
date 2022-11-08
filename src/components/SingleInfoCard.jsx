import React from "react";

function SingleInfoCard({ movieDataInfo }) {
  return movieDataInfo ? (
    <div className="flex flex-col">
      <p className="font-bold text-center p-4">Vote Average:</p>
      <p className="flex justify-center p-4">{movieDataInfo}</p>
    </div>
  ) : null;
}

export default SingleInfoCard;
