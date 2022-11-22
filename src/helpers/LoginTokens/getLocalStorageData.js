function getLocalStorageData(localStorageKey) {
  const localStorageString = localStorage.getItem(localStorageKey);
  return JSON.parse(localStorageString);
}

export default getLocalStorageData;
