import React from "react";
import { MdMovie } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const SmallImage = ({ URL, fetchedData, styles = "" }) => {
  return (
    <div className={`flex justify-center flex-row rounded mt-2 ${styles}`}>
      {fetchedData.poster_path || fetchedData.profile_path ? (
        <img
          className="rounded-lg shadow w-44 h-1/2 transition-all hover:scale-[0.99]"
          src={URL.replace(
            "{image_path}",
            fetchedData.poster_path
              ? fetchedData.poster_path
              : fetchedData.profile_path
          )}
          alt="new"
        />
      ) : "poster_path" in fetchedData ? (
        <MdMovie className="ml-1 flex w-1/2 h-1/2 opacity-80 " />
      ) : (
        <GoPerson className="ml-1 flex w-1/2 h-1/2 opacity-80 " />
      )}
    </div>
  );
};

export default SmallImage;
