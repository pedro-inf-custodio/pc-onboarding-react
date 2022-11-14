const BASE_URL = "https://api.themoviedb.org/3/";

export const URL_API_SEARCH = `${BASE_URL}search/multi?api_key=${process.env.REACT_APP_API_KEY}&query={query}`;

export const URL_API_POPULAR_MOVIES = `${BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_MOVIE = `${BASE_URL}movie/{id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_MOVIE_CREDITS = `${BASE_URL}movie/{id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_TV_SERIES = `${BASE_URL}tv/{id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_TV_SERIES_CREDITS = `${BASE_URL}tv/{id}/season/{season_number}/aggregate_credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_PERSON = `${BASE_URL}person/{id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_PERSON_MOVIES = `${BASE_URL}person/{id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_DETAIL_PERSON_TV_SERIES = `${BASE_URL}person/{id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}`;

export const URL_IMAGE_PATH = `https://image.tmdb.org/t/p/w440_and_h660_face{image_path}`;
