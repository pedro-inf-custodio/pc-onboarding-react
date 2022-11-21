import getLocalStorageData from "./LoginTokens/getLocalStorageData";

const setLocalStoragePrevPage = (pathname) => {
  const token = getLocalStorageData("token");
  return localStorage.setItem("previousPage_" + token.token, pathname);
};

export default setLocalStoragePrevPage;
