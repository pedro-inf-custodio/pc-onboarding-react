import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(
      "credentials_" + username,
      JSON.stringify({ username, password })
    );
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-screen w-screen font-light antialiased flex justify-center">
      <div className="flex flex-col h-80 w-64 shadow rounded-lg justify-center bg-stone-100 p-4 absolute top-56">
        <p>Register</p>

        <p>Register your credentials</p>
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
        <Link to="/">
          <p className="underline">Do you have an account? Signin here</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
