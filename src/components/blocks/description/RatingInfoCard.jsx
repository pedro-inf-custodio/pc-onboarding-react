import React from "react";
import { Rating } from "react-simple-star-rating";
import getLocalStorageData from "../../../helpers/LoginTokens/getLocalStorageData";
import SingleInfoCard from "../../atoms/detail/SingleInfoCard";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../store/index";

const RatingInfoCard = ({ detailData, media_type }) => {
  const token = getLocalStorageData("token");
  const rating = useSelector((state) => state.rating);
  const dispatch = useDispatch();
  const setRating = (rate) => {
    dispatch(
      actions?.setRating({
        rate: rate,
        id: detailData.id,
        token: token.token,
        media_type: media_type,
      })
    );
  };

  return (
    <div>
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
                  rating?.filter(
                    (value) => (value.movieId || value.tvId) === detailData.id
                  ).length > 0
                    ? rating?.filter(
                        (value) =>
                          (value.movieId || value.tvId) === detailData.id
                      )[0].myRating
                    : detailData.vote_average
                }
                size={20}
                iconsCount={10}
                transition={true}
                allowFraction={true}
                SVGstyle={{ display: "inline" }}
                onClick={(rate) => setRating(rate)}
              />
            </div>
          </div>

          <div className="mr-4">
            <SingleInfoCard
              labelTv={
                rating?.filter(
                  (value) => (value.movieId || value.tvId) === detailData.id
                ).length > 0
                  ? "My Vote"
                  : "Vote Count"
              }
              labelPerson={null}
              attributeTv={
                rating?.filter(
                  (value) => (value.movieId || value.tvId) === detailData.id
                ).length > 0
                  ? rating?.filter(
                      (value) => (value.movieId || value.tvId) === detailData.id
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
    </div>
  );
};

export default RatingInfoCard;
