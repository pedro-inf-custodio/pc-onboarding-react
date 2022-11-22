import React from "react";

const RankingCircle = ({ ranking }) => {
  return (
    <div className="bg-stone-800 text-stone-200 absolute z-10 top-4 left-4 outline-double outline-4 outline-stone-200 rounded-full h-10 w-10">
      <p className="flex justify-center pt-2 font-bold">{ranking}</p>
    </div>
  );
};

export default RankingCircle;
