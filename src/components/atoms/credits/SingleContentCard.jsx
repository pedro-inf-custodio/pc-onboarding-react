import React from "react";
import SmallImage from "../images/SmallImage";
import { URL_IMAGE_PATH } from "../../../helpers/constants";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleContentCard = ({ contentData, index }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div key={index} className="p-2 overflow-y-scroll">
      <div
        className={`rounded p-2 bg-white flex flex-col ${
          hidden ? "h-10" : "h-full"
        }`}
      >
        <div className="flex justify-between mt-1">
          <p className="text-sm">
            {contentData.name ? (
              <Link to={`/person/${contentData.id}`}>{contentData.name}</Link>
            ) : (
              <Link to={`/movies/${contentData.id}`}>{contentData.title}</Link>
            )}
          </p>
          <BsFillCaretDownFill
            size={18}
            onClick={() => {
              setHidden(!hidden);
            }}
          />
        </div>
        <SmallImage
          URL={URL_IMAGE_PATH}
          fetchedData={contentData}
          styles="overflow-hidden"
        />
      </div>
    </div>
  );
};

export default SingleContentCard;
