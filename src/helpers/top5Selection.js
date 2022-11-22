export const top5Selection = (contentData, media_type) => {
  return contentData
    .filter((data) => data.media_type === media_type)
    .slice(0, 5);
};

export const top5PopularMovies = (popularMoviesData) => {
  return popularMoviesData.slice(0, 5);
};
