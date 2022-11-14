import React from "react";
import { BiMovie } from "react-icons/bi";

const LargeImage = ({ URL, contentData, styles = "" }) => {
  return (
    <div className="flex">
      {contentData.poster_path ? (
        <img
          className={`w-96 shadow transition-all hover:scale-[0.99] ${styles}`}
          src={URL.replace("{image_path}", contentData.poster_path)}
          alt="new"
        />
      ) : (
        <BiMovie className="ml-1" size={18} />
      )}
    </div>
  );
};

export default LargeImage;
