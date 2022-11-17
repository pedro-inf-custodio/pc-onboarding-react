import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import SingleInfoCard from "../atoms/detail/SingleInfoCard";
import getLocalStorageData from "../../helpers/LoginTokens/getLocalStorageData";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/index";

const Description = ({ detailData, overviewTitle = false }) => {
  const rating = useSelector((state) => state.rating);
  const dispatch = useDispatch();
  const setRating = (rate) => {
    dispatch(
      actions.setRating(
        rating.filter((value) => value.movieId === detailData.id).length > 0
          ? rating.map((value) =>
              value.movieId === detailData.id
                ? { movieId: detailData.id, myRating: rate }
                : { ...value }
            )
          : [...rating, { movieId: detailData.id, myRating: rate }]
      )
    );
  };

  const token = getLocalStorageData("token");

  useEffect(() => {
    localStorage.setItem("rating_" + token.token, JSON.stringify(rating));
  }, [rating]);

  return (
    <div className="flex flex-col mt-2 h-full">
      {overviewTitle ? (
        <p className="font-bold text-center p-4">
          {detailData.overview || detailData.biography
            ? detailData.overview
              ? "Overview"
              : "Biography"
            : null}
        </p>
      ) : null}
      <p className="text-justify leading-loose flex self-center p-4 ml-2 mr-2">
        {detailData.overview ? detailData.overview : detailData.biography}
      </p>

      <div className="flex flex-col leading-loose">
        <div className="shadow-sm">
          <SingleInfoCard
            labelTv={"Release date"}
            labelPerson={"Birthday"}
            attributeTv={detailData.release_date}
            attributePerson={detailData.birthday}
          />
        </div>

        {detailData.vote_average ? (
          <div className="flex justify-between flex-row shadow-sm">
            <div className="flex flex-row">
              <SingleInfoCard
                labelTv={"Vote average"}
                labelPerson={null}
                attributeTv={detailData.vote_average.toFixed(1)}
                attributePerson={null}
              />

              <div className="self-center ml-2">
                <Rating
                  className="pb-1 self-center"
                  initialValue={
                    rating.filter((value) => value.movieId === detailData.id)
                      .length > 0
                      ? rating.filter(
                          (value) => value.movieId === detailData.id
                        )[0].myRating
                      : detailData.vote_average
                  }
                  size={20}
                  iconsCount={10}
                  transition={true}
                  allowFraction={true}
                  SVGstyle={{ display: "inline" }}
                  onClick={
                    (rate) => setRating(rate)

                    // setRating(
                    //   rating.filter((value) => value.movieId === detailData.id)
                    //     .length > 0
                    //     ? rating.map((value) =>
                    //         value.movieId === detailData.id
                    //           ? { movieId: detailData.id, myRating: rate }
                    //           : { ...value }
                    //       )
                    //     : [
                    //         ...rating,
                    //         { movieId: detailData.id, myRating: rate },
                    //       ]
                    // )
                  }
                />
              </div>
            </div>

            <div className="mr-4">
              <SingleInfoCard
                labelTv={
                  rating.filter((value) => value.movieId === detailData.id)
                    .length > 0
                    ? "My Vote"
                    : "Vote Count"
                }
                labelPerson={null}
                attributeTv={
                  rating.filter((value) => value.movieId === detailData.id)
                    .length > 0
                    ? rating.filter(
                        (value) => value.movieId === detailData.id
                      )[0].myRating
                    : detailData.vote_count
                    ? detailData.vote_count
                    : null
                }
                attributePerson={null}
              />
            </div>
          </div>
        ) : null}

        {detailData.homepage ? (
          <div className="shadow-sm">
            <SingleInfoCard
              labelTv={"HomePage"}
              labelPerson={"HomePage"}
              attributeTv={
                detailData.homepage ? (
                  <a href={detailData.homepage}> {detailData.homepage}</a>
                ) : null
              }
              attributePerson={
                detailData.homepage ? (
                  <a href={detailData.homepage}> {detailData.homepage}</a>
                ) : null
              }
            />
          </div>
        ) : null}

        <div className="flex justify-start shadow-sm ">
          <SingleInfoCard
            labelTv={"Duration"}
            labelPerson={"Birth Place"}
            attributeTv={detailData.runtime}
            attributePerson={detailData.place_of_birth}
          />
        </div>

        <div className="flex justify-start shadow-sm ">
          <SingleInfoCard
            labelTv={"Popularity"}
            labelPerson={"Popularity"}
            attributeTv={detailData.popularity}
            attributePerson={detailData.popularity}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
