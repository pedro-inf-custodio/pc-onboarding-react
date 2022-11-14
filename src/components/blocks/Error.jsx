import React from "react";
import Button from "../atoms/Button.jsx";
import { useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const Error = ({ showError, setShowError }) => {
  let navigate = useNavigate();
  return (
    <div className="fixed flex justify-center w-screen h-screen z-10">
      <div className="flex flex-col justify-center self-center w-1/2 h-1/4 rounded shadow bg-slate-100 text-center absolute">
        <div className="flex justify-end w-full h-full relative top-2 right-2 ">
          <ImCancelCircle
            className="cursor-pointer"
            size={20}
            onClick={() => setShowError(false)}
          />
        </div>

        <p className="self-top">
          The content you've inserted in the search bar couldn't be found in our
          database, please insert a valid name.{" "}
          <p className="font-bold">Click in the Home button or search again.</p>
        </p>
        <div className="flex justify-center pb-5">
          <Button
            onClick={(e) => navigate("/")}
            buttonText="Home"
            addedStyles="mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
