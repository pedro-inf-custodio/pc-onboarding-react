export const fetchDataAPI = async (
  url,
  setFetchedData,
  setShowError = null
) => {
  const data = await fetch(url).then((response) =>
    response.json().then((data) => ({
      status: response.status,
      results: data,
    }))
  );

  if (setShowError) {
    if (data.status === 200 && data.results.total_pages !== 0) {
      setFetchedData(data.results);
    } else {
      setShowError(true);
    }
  } else {
    setFetchedData(data.results);
  }

  return data;
};
