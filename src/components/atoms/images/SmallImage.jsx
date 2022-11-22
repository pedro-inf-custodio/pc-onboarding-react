import React from "react";
import { MdMovie } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const SmallImage = ({ URL, fetchedData, stylesDiv = "", stylesImg = "" }) => {
  return (
    <div className={`flex justify-center flex-row h-[23rem] ${stylesDiv}`}>
      {fetchedData.poster_path || fetchedData.profile_path ? (
        <img
          className={`shadow ${stylesImg}`}
          src={URL.replace(
            "{image_path}",
            fetchedData.poster_path
              ? fetchedData.poster_path
              : fetchedData.profile_path
          )}
          alt="new"
        />
      ) : "poster_path" in fetchedData ? (
        <div className="flex ml-8 mt-4 scale-125">
          <MdMovie className="flex w-1/2 h-1/2 opacity-80" />
        </div>
      ) : (
        <div className="flex ml-6">
          <GoPerson className="flex w-1/2 h-1/2 opacity-80" />
        </div>
      )}
    </div>
  );
};

export default SmallImage;
