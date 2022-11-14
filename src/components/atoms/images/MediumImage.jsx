import React from "react";
import { MdMovie } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const MediumImage = ({ URL_IMAGE_PATH, detailData }) => {
  return (
    <div className="flex justify-center">
      {detailData.poster_path || detailData.profile_path ? (
        <img
          className="w-1/4 mt-2 rounded-lg shadow transition-all hover:scale-[0.99]"
          src={URL_IMAGE_PATH.replace(
            "{image_path}",
            detailData.poster_path
              ? detailData.poster_path
              : detailData.profile_path
          )}
          alt="new"
        />
      ) : "poster_path" in detailData ? (
        <MdMovie className="ml-1 flex w-1/3 h-1/3 opacity-80 " />
      ) : (
        <GoPerson className="ml-1 flex w-1/3 h-1/3 opacity-80 " />
      )}
    </div>
  );
};

export default MediumImage;
