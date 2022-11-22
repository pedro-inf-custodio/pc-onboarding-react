import React from "react";
import { BiMovie } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

const LargeImage = ({ URL, contentData, styles = "" }) => {
  return (
    <div className="flex">
      {contentData.poster_path || contentData.profile_path ? (
        <img
          className={`w-96 shadow transition-all ${styles}`}
          src={URL.replace(
            "{image_path}",
            contentData.poster_path
              ? contentData.poster_path
              : contentData.profile_path
          )}
          alt="new"
        />
      ) : "poster_path" in contentData ? (
        <BiMovie className="ml-1" size={18} />
      ) : (
        <GoPerson className="ml-1 flex w-1/3 h-1/3 opacity-80 " />
      )}
    </div>
  );
};

export default LargeImage;
