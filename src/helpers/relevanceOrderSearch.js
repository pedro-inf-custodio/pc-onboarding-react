export const relevanceOrderSearch = (fetchedData) => {
  let relevanceOrder = [];

  fetchedData?.results.forEach((result) => {
    if (!relevanceOrder.includes(result.media_type)) {
      relevanceOrder.push(result.media_type);
    }
  });
  return relevanceOrder;
};
