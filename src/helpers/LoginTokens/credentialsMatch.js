function credentialsMatch(userCredentials) {
  const credentialsStorage = JSON.parse(
    localStorage.getItem("credentials_" + userCredentials.username)
  );
  if (
    credentialsStorage?.username === userCredentials?.username &&
    credentialsStorage?.password === userCredentials?.password
  ) {
    return true;
  } else {
    return false;
  }
}

export default credentialsMatch;
