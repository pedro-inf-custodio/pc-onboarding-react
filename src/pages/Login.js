import React, { useState } from "react";

const Login = () => {
  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-screen w-screen font-light antialiased flex justify-center">
      <div className="flex flex-col h-80 w-64 shadow rounded-lg justify-center bg-stone-100 p-4 absolute top-56">
        <p>Please introduce your credentials</p>
        <form>
          <label>
            <p>Username</p>
            <input type="text"></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password"></input>
          </label>
          <div>
            <button className="bg-black text-white rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
