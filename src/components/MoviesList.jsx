import React from "react";
import { SingleMovieCard } from "./SingleMovieCard";

export const MoviesList = ({ popularMoviesData }) => {
  return (
    <div className="w-screen h-screen">
      <div className="">
        {popularMoviesData.map((data) => (
          <SingleMovieCard key={data.id.toString()} movieData={data} />
        ))}
      </div>
    </div>
  );
};
