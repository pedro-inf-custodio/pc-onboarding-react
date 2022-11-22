import React, { useState } from "react";
import { loginUser } from "../helpers/LoginTokens/loginUser";
import credentialsMatch from "../helpers/LoginTokens/credentialsMatch";
import setTokenStorage from "../helpers/LoginTokens/setTokenStorage";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [credentialsError, setCredentialsError] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password,
    });

    if (credentialsMatch({ username: username, password: password })) {
      setTokenStorage({ token: username });
      setIsLoggedIn(true);

      dispatch(actions.setInit({ username: username }));
      navigate(localStorage.getItem("previousPage_" + username));
    } else {
      setCredentialsError(true);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-screen w-screen font-light antialiased flex justify-center">
      <div className="flex flex-col h-80 w-64 shadow rounded-lg justify-center bg-stone-100 p-4 absolute top-56">
        <p>Login</p>

        <p>Please introduce your credentials</p>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <div>
            <button className="bg-black text-white rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Link to="/register">
          <p className="underline">Don't have an account? Register here</p>
        </Link>
        {credentialsError ? (
          <p className="text-red-600">
            The credentials introduced are not valid, please try again.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
