export const fetchMovies = async (url, query = "") => {
  const data = await fetch(url.concat(query)).then((response) =>
    response.json()
  );
  return data;
};
