const setTokenStorage = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export default setTokenStorage;
