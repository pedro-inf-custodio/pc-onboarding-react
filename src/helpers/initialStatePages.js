export const initialStatePages = (location) => {
  return location.search !== "" ? Number(location.search.split("=")[1]) : 1;
};
