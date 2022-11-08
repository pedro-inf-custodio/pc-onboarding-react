import React from "react";
import { URL_IMAGE_PATH } from "../helpers/constants.js";

export const SingleMovieCard = ({ movieData }) => {
  return (
    <div className="outline outline-offset-2 rounded outline-1 outline-black/10 bg-slate-50">
      <p className="capitalize text-3xl text-center p-2">{movieData.title}</p>

      <div className="flex flex-row bg-white rounded-lg">
        <img
          className="rounded-lg shadow transition-all hover:scale-[0.99]"
          src={`${URL_IMAGE_PATH}${movieData.poster_path}`}
          alt="new"
        />
        <p className="text-justify leading-loose flex self-center p-4">
          {movieData.overview}
        </p>
      </div>

      <div>
        <p className="flex justify-center p-4	text-xl">
          Vote average: {movieData.vote_average}
        </p>
      </div>
    </div>
  );
};
