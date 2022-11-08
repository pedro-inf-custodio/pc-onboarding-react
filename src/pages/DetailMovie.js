import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL_IMAGE_PATH, URL_DETAIL_MOVIE } from "../helpers/constants.js";
import { fetchMovies } from "../helpers/fetchMovies.js";

function DetailMovie() {
  const [movieData, setMovieData] = useState();
  let { movieId } = useParams();
  let detailUrl = URL_DETAIL_MOVIE.replace("{movie_id}", movieId.toString());

  useEffect(() => {
    fetchMovies(detailUrl).then((data) => setMovieData(data));
  }, [!movieData]);

  return movieData ? (
    <div className="w-screen py-16">
      <div className="outline outline-offset-2 rounded outline-1 outline-black/10 bg-slate-50 p-4">
        <div>
          <p className="capitalize text-3xl text-center py-4 font-bold">
            {movieData.title}
          </p>
        </div>

        <div className="flex flex-col bg-white rounded-lg">
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow transition-all hover:scale-[0.99]"
              src={`${URL_IMAGE_PATH}${movieData.poster_path}`}
              alt="new"
              width={300}
            />
          </div>

          <p className="font-bold text-center p-4">{movieData.tagline}</p>

          <p className="font-bold text-center p-4">Overview:</p>
          <p className="text-justify leading-loose flex self-center p-2">
            {movieData.overview}
          </p>
        </div>

        <div className="flex justify-center flex-row">
          {movieData.vote_average ? (
            <div className="flex flex-col">
              <p className="font-bold text-center p-4">Vote Average:</p>
              <p className="flex justify-center p-4">
                {movieData.vote_average}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col">
            <p className="font-bold text-center p-4">Vote Count:</p>
            <p className="flex justify-center p-4">{movieData.vote_count}</p>
          </div>

          {movieData.homepage ? (
            <div className="flex flex-col">
              <p className="font-bold text-center p-4">Homepage:</p>
              <p className="flex justify-center p-4">{movieData.homepage}</p>
            </div>
          ) : null}

          {movieData.release_date ? (
            <div className="flex flex-col">
              <p className="font-bold text-center p-4">Release Date:</p>
              <p className="flex justify-center p-4">
                {movieData.release_date}
              </p>
            </div>
          ) : null}

          {movieData.popularity ? (
            <div className="flex flex-col">
              <p className="font-bold text-center p-4">Popularity Ranking:</p>
              <p className="flex justify-center p-4	">{movieData.popularity}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
}

export default DetailMovie;
