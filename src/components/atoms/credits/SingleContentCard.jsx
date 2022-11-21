import React from "react";
import SmallImage from "../images/SmallImage";
import { URL_IMAGE_PATH } from "../../../helpers/constants";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ellipsisLongTitle } from "../../../helpers/ellipsisLongTitle";
import SingleInfoCard from "../detail/SingleInfoCard";

const SingleContentCard = ({ contentData, index, isTvShow, title }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div key={index} className="pb-2 rounded ">
      <div
        className={`rounded p-2 bg-white flex flex-col relative ${
          hidden ? "h-10" : "h-56"
        }`}
      >
        <div className="flex justify-between mt-1 ml-2">
          <p className={`text-sm ${hidden ? "" : "font-bold"}`}>
            {contentData.name ? (
              <Link to={`${isTvShow ? "/tv/" : "/people/"}${contentData.id}`}>
                {ellipsisLongTitle(contentData.name, 40)}
              </Link>
            ) : (
              <Link to={`/movies/${contentData.id}`}>
                {ellipsisLongTitle(contentData.title, 40)}
              </Link>
            )}
          </p>
          <BsFillCaretDownFill
            size={18}
            onClick={() => {
              setHidden(!hidden);
            }}
          />
        </div>

        <div className="flex flex-row">
          {!hidden ? (
            <>
              <SmallImage
                URL={URL_IMAGE_PATH}
                fetchedData={contentData}
                stylesDiv="mt-2 z-10"
                stylesImg=" rounded-full object-cover object-center h-44 w-44"
              />
              <div className="rounded absolute w-[440px] top-[62px] left-24 right-2 flex flex-col justify-center">
                <div className="flex flex-col justify-center ml-12">
                  <div className="flex justify-center shadow-xl pl-4 bg-stone-700 text-white rounded-t-lg">
                    {title === "Cast" ? (
                      <SingleInfoCard
                        labelTv={"Character"}
                        labelPerson={"Character"}
                        attributeTv={
                          contentData?.roles
                            ? contentData?.roles[0].character
                            : contentData?.character
                            ? contentData?.character
                            : "Undefined"
                        }
                        attributePerson={contentData?.character}
                      />
                    ) : (
                      <SingleInfoCard
                        labelTv={"Job"}
                        labelPerson={title === "Cast" ? "Character" : "1"}
                        attributeTv={
                          contentData?.jobs
                            ? contentData?.jobs[0].job
                            : contentData?.job
                        }
                        attributePerson={contentData?.job}
                      />
                    )}
                  </div>
                  <div className="flex justify-center shadow-xl rounded-b-lg">
                    <SingleInfoCard
                      labelTv={"Popularity"}
                      labelPerson={"popularity"}
                      attributeTv={contentData.popularity}
                      attributePerson={contentData.popularity}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingleContentCard;
