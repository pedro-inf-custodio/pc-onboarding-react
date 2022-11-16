function credentialsMatch(userCredentials) {
  const credentialsStorage = JSON.parse(localStorage.getItem("credentials"));
  if (
    credentialsStorage.username === userCredentials.username &&
    credentialsStorage.password === userCredentials.password
  ) {
    return true;
  } else {
    return false;
  }
}

export default credentialsMatch;
