import React from "react";
import { MdMovie } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const SmallImage = ({ URL, fetchedData, styles = "" }) => {
  return (
    <div className={`flex justify-center flex-row h-[23rem] ${styles}`}>
      {fetchedData.poster_path || fetchedData.profile_path ? (
        <img
          className="shadow rounded-t-lg"
          src={URL.replace(
            "{image_path}",
            fetchedData.poster_path
              ? fetchedData.poster_path
              : fetchedData.profile_path
          )}
          alt="new"
        />
      ) : "poster_path" in fetchedData ? (
        <MdMovie className="flex w-full h-full opacity-80 scale-50" />
      ) : (
        <GoPerson className="flex w-full h-full opacity-80 scale-50 " />
      )}
    </div>
  );
};

export default SmallImage;
