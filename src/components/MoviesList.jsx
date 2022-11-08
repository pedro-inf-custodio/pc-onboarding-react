import React from "react";
import { SingleMovieCard } from "./SingleMovieCard";

export const MoviesList = ({ popularMoviesData }) => {
  return (
    <div className="w-full h-full pl-32 pr-32">
      <div>
        {popularMoviesData.map((data) => (
          <SingleMovieCard key={data.id.toString()} movieData={data} />
        ))}
      </div>
    </div>
  );
};
