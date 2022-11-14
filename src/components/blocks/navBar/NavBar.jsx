import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button.jsx";
import SearchBar from "./SearchBar.jsx";

const NavBar = ({ search, setSearch }) => {
  return (
    <div className="fixed top-0 w-full flex bg-stone-800 drop-shadow-md z-20">
      <div className="flex justify-start">
        <Link to="/">
          <Button
            onClick={null}
            buttonText={"Home"}
            addedStyles={
              "p-2 w-24 ml-2 mt-2 mr-2 rounded-full font-thin hover:font-bold"
            }
          />
        </Link>
        <Link to="/movies">
          <Button
            onClick={null}
            buttonText={"Movies"}
            addedStyles={
              "p-2 w-24 mr-2 mt-2 rounded-full font-thin hover:font-bold"
            }
          />
        </Link>
        <Link to="/tv">
          <Button
            onClick={null}
            buttonText={"Tv series"}
            addedStyles={"p-2 w-24 mt-2 rounded-full font-thin hover:font-bold"}
          />
        </Link>
        <Link to="/persons">
          <Button
            onClick={null}
            buttonText={"Person"}
            addedStyles={
              "p-2 w-24 ml-2 mt-2 rounded-full font-thin hover:font-bold"
            }
          />
        </Link>
      </div>

      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
};

export default NavBar;