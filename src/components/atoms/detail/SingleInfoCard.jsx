import React from "react";

function SingleInfoCard({
  labelTv,
  labelPerson,
  attributeTv,
  attributePerson,
}) {
  return attributeTv || attributePerson ? (
    <div className="flex flex-row">
      <p className="text-justify font-bold leading-loose flex self-center p-4 ml-2 mr-2">
        {attributeTv ? labelTv : labelPerson}
      </p>
      <p className="text-justify leading-loose text-sm flex self-center">
        {attributeTv ? attributeTv : attributePerson}
      </p>
    </div>
  ) : null;
}

export default SingleInfoCard;
