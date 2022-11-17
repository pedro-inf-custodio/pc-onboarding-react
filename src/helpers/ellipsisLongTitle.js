export const ellipsisLongTitle = (title, sliceStop = 90) => {
  return title?.length > sliceStop - 2
    ? title.slice(0, sliceStop) + "..."
    : title;
};
