import React from "react";
import Button from "../../atoms/Button";

const SignInBar = () => {
  return (
    <div className="w-full h-8 fixed top-0 z-10 bg-stone-200">
      <div className="flex flex-row justify-end pt-1">
        <Button
          onClick={null}
          buttonText={"SignIn"}
          addedStyles={"w-24 h-6 ml-2 mr-2 font-thin hover:font-bold"}
        />
        <Button
          onClick={null}
          buttonText={"Register"}
          addedStyles={"w-24 h-6 ml-2 mr-2 font-thin hover:font-bold"}
        />
      </div>
    </div>
  );
};

export default SignInBar;
