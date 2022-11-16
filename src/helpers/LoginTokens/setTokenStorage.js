function setTokenStorage(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

export default setTokenStorage;
