export const ellipsisLongTitle = (title, sliceStop = 30) => {
  return title?.length > sliceStop - 2
    ? title.slice(0, sliceStop) + "..."
    : title;
};
