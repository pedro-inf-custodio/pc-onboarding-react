import React from "react";
import { useNavigate } from "react-router-dom";
import getLocalStorageData from "../../../helpers/LoginTokens/getLocalStorageData";

const SignOutBar = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  const token = getLocalStorageData("token");
  const credentials = getLocalStorageData("credentials_" + token.token);

  return (
    <div className="w-full h-6 fixed top-0 z-10 bg-stone-200 text-sm text-stone-800 flex justify-end">
      <button
        className="pr-2 h-6 underline"
        onClick={(e) => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          navigate("/");
        }}
      >{`Sign Out ${credentials.username}`}</button>
    </div>
  );
};

export default SignOutBar;
